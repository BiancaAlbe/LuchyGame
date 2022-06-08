let nr_random = Math.floor((Math.random() * 3) + 1);
                let  stop = 0; 

                function Button1() {
                    console.log(nr_random);
                    if (stop == 0) {
                        if (nr_random == 1) {
                            document.getElementById("demo").innerHTML = "Congratulations";
                        } else {
                            document.getElementById("demo").innerHTML = "Try again";
                        }
                        stop = 1;
                    }
                }

                function Button2() {
                    console.log(nr_random);
                    if (stop == 0) {
                        if (nr_random == 2) {
                            document.getElementById("demo").innerHTML = "Congratulations";
                        } else {
                            document.getElementById("demo").innerHTML = "Try again";
                        }
                        stop = 1;
                    }
                }

                function Button3() {
                    console.log(nr_random);
                    if (stop == 0) {
                    if (nr_random == 3) {
                            document.getElementById("demo").innerHTML = "Congratulations";
                        } else {
                            document.getElementById("demo").innerHTML = "Try again";
                        }
                        stop = 1;
                    }
                }