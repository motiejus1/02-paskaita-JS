        
        "use strict";
        //Kintamojo apibrezimas
        let x;
        let y;
        let z, g, p, i;

        let elementas;
        //Reiksmes kintamajam priskyrimas
        x = 16;
        y = 16.6;
        z = "Labas pasauli";
        g = 'Labas pasauli';
        p = "Imone 'Geri studentai'";
        i = ' Imone "Geri studentai" ';

        //Sudetis
        let suma, a, b;
        a = 5;
        b = 6;
        suma = a + b; // 11

        //Skirtumas
        let skirtumas;
        a = 11;
        b = 3;

        skirtumas = a - b;

        a = suma; //11

        //Daugyba
        let sandauga;
        sandauga = a * b; //33

        //Dalyba
        let rez;
        rez = sandauga / 2; // 33/2 = 16.5;

        //Liekanos skaiciavimas
        let liekana;
        liekana = 7 % 4; // 33/2 = 1

        //Kelimas laipsniu
        rez = 5 ** 2;

        sandauga++; //34
        sandauga = sandauga + liekana; //35

        sandauga--;//34

        sandauga += liekana; //37
        sandauga -= liekana;
        sandauga /= liekana;
        sandauga *= liekana;
        sandauga %= liekana;
        sandauga **= liekana;

        //
        let tekstas, skaicius;
        tekstas = "Tekstas";
        skaicius = 5;
        suma = tekstas + skaicius;// Tekstas 5

        // dalyba uz 0;

        let isnulio = 5/0;

        let bendrastekstas;//string
        bendrastekstas = "Suma:" + suma + " Skirtumas: " + skirtumas + " Sandauga: " + sandauga; 

        sandauga = (5 + 4) * 3; //17
        sandauga = 10 / (2 * 4); //20

        elementas = document.querySelector(".tekstas");

        let kintamaji;
        console.log(kintamaji);

        let neigiami, sakni;
        
        neigiami = -5 + (-4);

        // sakni = Math.sqrt(-4);

         sakni = 9 ** (1/2);

        // alert(neigiami);
        console.log(sakni);
        
        //Kintamuju isvedimas
        console.log(suma);
        console.log(skirtumas);
        console.log(elementas);
        console.log(sandauga);
        console.log(rez);
        console.log(liekana);
        console.log(bendrastekstas);
        // console.log("Labas pasauli");
        // console.log(document.querySelector(".tekstas"));
        // console.log(document.querySelector(".tekstas").classList);
        // console.log(document.querySelector(".tekstas").textContent);


        // document.querySelector(".tekstas").classList.add('javascript-klase');
        // document.querySelector(".tekstas").classList.remove('negrazus-tekstas');

        // console.log(document.querySelector(".tekstas").classList);
