import Product from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const products = [
  {
    _id: "1",
    url: "https://cdn.leroymerlin.ro/image/2000/2000/81463/5e4ea342b75eb_20200220051826.jpg",
    price: 60,
    description:
      "Ventilator de birou Equation, 40 W, Ø 30 cm, 3 viteze, alb. Produsul se poate monta in sufragerie, dormitor sau birou. Este proiectat cu un corp puternic din metal cu finisaj cromat. Poate fi inclinat pentru a directiona fluxul de aer. Nu contine cronometru. Putere: 40 W; Numar viteze: 3; Material: plastic; Oscilatie: Da – se poate pozitiona in locul dorit, fara a deplasa ventilatorul; Culoare: alb; Diametru: 30 cm; Dimensiuni (latime x inaltime x adancime): 33 x 46 x 24 cm. Lungime cablu: 1.6 m; Greutate neta: 2.08 kg.",
  },
  {
    _id: "2",
    url: "https://cdn.leroymerlin.ro/image/2000/2000/41583/5c8645d141ee2_20190311012609.jpg",
    price: 322,
    description:
      "Aspirator uscat Bosch Professional GAS, pe acumulator, 18 V, 6 A, rezervor 0.7 L, acumulator neinclus. Performanta de curatare redefinita, cu o noua tehnologie de flux de aer rotativ, care impiedica blocarea filtrului. 3 fluxuri de aer rotative puternice pentru eficienta ridicata de curatare, cu pierderi minime de putere de aspiratie pe toata durata de utilizare. Motorul puternic furnizeaza o presiune de aspirare de 6 kPa si o durata de rulare lunga de 7 minute pe Ah.\nFuncționare extrem de confortabilă datorită formei ergonomice. Confort ridicat datorita demontarii rapide si usoare a filtrului si a colectorului. Ideal de folosit pentru: - Electricieni, renovari: ideal pentru fiecare mester, faciliteaza curatarea in spatii stranse sau pe o scara, deoarece aspiratorul este foarte usor si, prin urmare, extrem de mobil. - Tamplari, dulgheri: ideal pentru indepartarea prafului, nisipului si a altor particule de murdarie, ideal pentru curatarea murdariei in zonele greu accesibile. - Constructori, instalatori, mesteri: in special pentru curatarea utilajelor, podelelor, covoarelor, lemnului dur, parchetului laminat si gresiei.",
  },
  {
    _id: "3",
    url: "https://cdn.leroymerlin.ro/image/2000/2000/17899/5ade120e1bb00_20180423080414.jpeg",
    price: 43,
    description:
      "Intrerupator simplu Schneider Cedar, etans, montaj aplicat, cu led, exterior, IP44, alb. Montaj aplicat, curent nominal 16 AX la 250 V c.a. - cu un design rafinat, gama Cedar plus asigura o durata de viata maxima datorita materialelor de buna calitate utilizate. Carcasa din plastic este din poliamida si pastreaza caracteristicile chiar si la temperaturi scazute. garnitura inelara superioara (cauciuc) a gamei Cedar Plus poate fi taiata cu un cutit iar garnitura plata inferioara poate fi perforata cu o surubelnita. - stil elegant, robustete si etanseitate. Prin stilul sau elegant, cu robustetea si etanseitatea sa, Cedar Plus este o gama rezistenta la umezeala care respecta toate cerintele pentru toate mediile umede din interior/exterior, cum ar fi garajele, pivnitele, hambarele, bucatariile profesionale, mediile industriale etc - sistemul de deschidere rapida care conecteaza placa frontala la placa de baza, cu cleme pe spatiul din cutie, face ca produsul sa poata fi instalat rapid, usor si sigur.",
  },
  {
    _id: "4",
    url: "https://cdn.leroymerlin.ro/image/2000/2000/81697/5e537a16c5eea_20200224092406.jpg",
    price: 45,
    description:
      "Lampa de birou Inspire Nae, 1 x E27, 30 W, argintiu. Lampa de birou Inspire Nae este un corp de iluminat de culoare argintie, pentru interior, realizat din metal si plastic. Veioza se aseaza cu usurinta pe un corp de mobilier precum biroul, noptiera sau comoda, fiind ideal pentru birou, camera de odihna, living sau hol. Functioneaza cu un bec cu dulie groasa E27 si permite o putere maxima de 30 W. Sursa nu este inclusa, insa corpul de iluminat pot fi echipat cu becuri din clasele energetice A++, A+, A, B, C, D, E.",
  },
  {
    _id: "5",
    url: "https://cdn.leroymerlin.ro/image/2000/2000/5739/5a5ce58498221_20180115073148.jpg",
    price: 467,
    description:
      "Ciocan rotopercutor Bosch PBH 2500, electric, 600 W, 1.8 J. Ciocanul rotopercutor PBH 2500 RE Bosch din „Compact Generation“ este un partener inalt performant pentru toate lucrarile de gaurire cu si fara percutie si de daltuire. Puterea de 600 W si mecanismul de percutie pneumatic Bosch, cu o energie de percutie de 1.9 J asigura o forta mare de lovire. Datorita acesteia, el executa fara efort gauri in beton si efectueaza cu usurinta chiar lucrarile de daltuire precum stemuirea de canale pentru cabluri sau indepartarea placilor ceramice. Prin forma constructiva subtire cu straturi softgrip si greutatea sa mica de operare de numai 2.2 kg, cu PBH 2500 RE se poate lucra intr-un mod foarte placut. - compact si foarte puternic, pentru gaurire cu si fara percutie si daltuire. - motor de 600 W si mecanism de percutie pneumatic de 1.9 J pentru toate utilizarile - mandrina SDS plus pentru schimbarea rapida, fara cheie, a accesoriilor - gaureste cu percutie si daltuieste in beton si zidarie sau gaureste placile ceramice, lemnul si metalul - functie de daltuire Vario Lock, care permite selectia unor pozitii diferite ale daltii - pana la 22/30/13 mm in beton/lemn/metal - cantareste numai 2.2 kg.",
  },
  {
    _id: "6",
    url: "https://cdn.leroymerlin.ro/image/2000/2000/15771/5acf8beddbc02_20180412074013.jpg",
    price: 10,
    description:
      "Surubelnita Pozidrive PZ1 Dexter, varf magnetic, 80 mm, crom-vanadiu. Surubelnita Dexter Pozidrive, dimensiune 1 x 80 mm, este utilizata pentru insurubarea si desurubarea mecanica a produselor sau elementelor de fixare cu filet: suruburi simple, suruburi autofiletante. Modelul este echipat cu o tija metalica puternica cu varf PZ1. Surubelnita este utilizata pentru conexiuni electrice si reparatii minore. Manerul moale este fabricat din plastic bicomponent si are o forma ergonomica pentru o prindere confortabila. Surubelnita cu varf magnetic este convenabil de utilizat prin blocarea si tinerea dispozitivului de fixare. Partea de lucru a surubelnitei este o lama de otel crom-vanadiu din aliaj S2, de 80 mm lungime si latime 5 mm. Tija metalica de inalta rezistenta are o serie de avantaje: - rigiditate crescuta si rezistenta la solicitari mecanice; - rezistenta la uzura si durata de viata sporita; - lipsa tendintei la oxidare si aparitia ruginii; - durabilitate si rezistenta la deformare.",
  },
  {
    _id: "7",
    url: "https://cdn.leroymerlin.ro/image/2000/2000/52493/5d68afeadb8ee_20190830081106.jpg",
    price: 23,
    description:
      "Ciocan lacatus Dexter, maner fibra sticla, 300 g. Ciocan pentru lacatus Dexter, cu maner fibra sticla, este potrivit pentru uz casnic si profesional. Conceput pentru lucrari de tamplarie : ciocanirea cuie sau dibluri, daltuirea lemnului cu dalta sau dalta, indreptarea si montarea structurilor. Partea de impact este fabricata din otel carbon - un material durabil care nu este predispus la aschii si fisuri. Marginile de lucru ascutite si plane ofera o munca convenabila. Maner material - plastic. Indeparteaza vibratiile cauzate de incarcarea socului, facand munca mai confortabila si mai sigura. Nu este supus decaderii si are o durata lunga de viata. Diametrul manerului 35 mm, lungimea 28 cm. Greutate ciocan: 0.4 kg. Greutate cap ciocan: 0.3 kg",
  },
];

const reducer = (state: Product[] = products, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_PRODUCT:
      return [action.payload, ...state];
    case ActionType.DELETE_PRODUCT:
      return state.filter((product) => product._id !== action.payload);
    case ActionType.EDIT_PRODUCT:
      return state.map((product) => {
        if (product._id !== action.payload._id) {
          return product;
        }
        return action.payload;
      });
    case ActionType.ADD_NAME:
      const names = action.payload;
      return state.map((product, index) => {
        return { ...product, name: names[index] };
      });
    default: {
      return state;
    }
  }
};

export default reducer;
