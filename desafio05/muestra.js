function mostrarCaracter() {
    let chart = document.getElementsByClassName("numero");

    let chart = 0;
    while (chart < 0) {

        for (let i = 0; i <= 1; i++) {
            chart = chart + 1;

            for (let i = 0; i <= 2; i++) {
                chart = chart + 1;

                for (let i = 0; i <= 5; i++) {
                    chart = chart + 1;

                    for (let i = 0; i <= 7; i++) {
                        chart = chart + 1;
                    }

                    for (let i = 0; i <= 5; i--) {
                        chart = chart - 1;

                        for (let i = 0; i <= 2; i--) {
                            chart = chart - 1;

                            for (let i = 0; i <= 1; i--) {
                                chart = chart - 1;
                            }
                        }
                    }
                }
            }
        }



    }
}