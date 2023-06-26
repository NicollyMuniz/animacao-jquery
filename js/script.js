$("#btnDireita").click(
    function () {
        $("#virus").animate({ left: "900px" }), ({ duration: 1000 })
    }
)

$("#btnEsquerda").click(
    function () {
        $("#virus").animate({ left: "0px" }), ({ duration: 1000 })
    }
)