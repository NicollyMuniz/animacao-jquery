$("#btnDireita").click(
    function () {
        $("#virus").animate({ left: "1300px" }), ({ duration: 6000 })
    }
)

$("#btnEsquerda").click(
    function () {
        $("#virus").animate({ left: "0px" }), ({ duration: 3000 })
    }
)