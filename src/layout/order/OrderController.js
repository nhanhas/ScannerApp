app
    .controller('OrderController', ['$scope', '$location','$rootScope', function($scope, $location,$rootScope) {

        $scope.onAddNewProduct = function (){
            console.log('adding...');
            //simmulate the "choose file" button
            var input = document.querySelector("input[type=file]");
            input.click();
        };


        $scope.onResetAll = function (){
            console.log('resetting...')
        };


        /**
         *
         * CODE BAR
         *
         */
        $scope.lastResult = undefined;

        /**
         * To check out the Live Stream Option
         * Go to View2Controller
         */

        //When file is taken from camera or Src
        $scope.imageUploaded = function (e){
            $scope.decodeQuagga(URL.createObjectURL(e.files[0]));
        };

        //run de decoder!
        $scope.decodeQuagga = function(src) {
            Quagga.decodeSingle({
                src: src,
                numOfWorkers: 0,  // Needs to be 0 when used within node
                inputStream: {
                    size: 800  // restrict input-size to be 800px in width (long-side)
                },
                decoder: {
                    readers : ["code_128_reader", "ean_reader", "ean_8_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader"]
                },
            }, function(result) {
                if(result.codeResult) {
                    console.log("result", result.codeResult.code);
                } else {
                    console.log("not detected");
                }
            });



        };

        //Quaggajs processes---
        Quagga.onProcessed(function(result) {
            var drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay,
                area;

            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                    result.boxes.filter(function (box) {
                        return box !== result.box;
                    }).forEach(function (box) {
                        Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
                    });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
                }

            }
        });

        Quagga.onDetected(function(result) {
            var code = result.codeResult.code,
                $node,
                canvas = Quagga.canvas.dom.image;

            $node = $('<li><div class="thumbnail"><div class="imgWrapper"><img /></div><div class="caption"><h4 class="code"></h4></div></div></li>');
            $node.find("img").attr("src", canvas.toDataURL());
            $node.find("h4.code").html(code);
            $("#result_strip ul.thumbnails").prepend($node);
        });


    }]);