import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtGM1h4mUJ8LPN65_sSfpGComUz4ZvJtI",
  authDomain: "gestaofarms.firebaseapp.com",
  projectId: "gestaofarms",
  storageBucket: "gestaofarms.firebasestorage.app",
  messagingSenderId: "629042323991",
  appId: "1:629042323991:web:aa6203dcdc0d51896ff252",
  measurementId: "G-KXFF423ELN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const produtos = [
  { produto: "PACTO", classe: "HERBICIDA", unidade: "GRAMA", quantidade: 960 },
  { produto: "VERDICT MAX", classe: "HERBICIDA", unidade: "LITRO", quantidade: 80 },
  { produto: "TRINTO", classe: "HERBICIDA", unidade: "LITRO", quantidade: 1980 },
  { produto: "TOPINAM", classe: "HERBICIDA", unidade: "LITRO", quantidade: 400 },
  { produto: "VIP PRO", classe: "HERBICIDA", unidade: "LITRO", quantidade: 70 },
  { produto: "YAMATO", classe: "HERBICIDA", unidade: "LITRO", quantidade: 100 },
  { produto: "SONDA HT", classe: "HERBICIDA", unidade: "LITRO", quantidade: 200 },
  { produto: "ARKEIRO", classe: "HERBICIDA", unidade: "LITRO", quantidade: 60 },
  { produto: "GRAP NOD", classe: "INOCULANTE", unidade: "DOSE", quantidade: 200 },
  { produto: "MASTERFIX SOJA", classe: "INOCULANTE", unidade: "DOSE", quantidade: 180 },
  { produto: "MASTERFIX AZOSPIRILUM", classe: "INOCULANTE", unidade: "DOSE", quantidade: 100 },
  { produto: "AGRIPON SOYBACKER", classe: "INOCULANTE", unidade: "DOSE", quantidade: 270 },
  { produto: "AGRIPON CLOCK", classe: "INOCULANTE", unidade: "DOSE", quantidade: 45 },
  { produto: "EVOLUTION", classe: "INOCULANTE", unidade: "DOSE", quantidade: 90 },
  { produto: "AGRIPON ALGORITMO", classe: "INOCULANTE", unidade: "DOSE", quantidade: 40 },
  { produto: "EXCELLENCE COT", classe: "INOCULANTE", unidade: "DOSE", quantidade: 10 },
  { produto: "PERMIT STAR", classe: "INOCULANTE", unidade: "DOSE", quantidade: 14 },
  { produto: "AFRAIDO", classe: "INSETICIDA", unidade: "LITRO", quantidade: 40 },
  { produto: "AGREGUS", classe: "INSETICIDA", unidade: "LITRO", quantidade: 25 },
  { produto: "ACEMIP", classe: "INSETICIDA", unidade: "LITRO", quantidade: 20 },
  { produto: "ADVER", classe: "INSETICIDA", unidade: "LITRO", quantidade: 15 },
  { produto: "BOVERIL", classe: "INSETICIDA", unidade: "KG", quantidade: 10 },
  { produto: "DOMINIA", classe: "INSETICIDA", unidade: "LITRO", quantidade: 25 },
  { produto: "GALL", classe: "INSETICIDA", unidade: "KG", quantidade: 10 },
  { produto: "HERO BR", classe: "INSETICIDA", unidade: "LITRO", quantidade: 220 },
  { produto: "BAZUKA", classe: "FOLIAR", unidade: "LITRO", quantidade: 20 },
  { produto: "AGRIPRON SOLUTION", classe: "FOLIAR", unidade: "LITRO", quantidade: 20 },
  { produto: "AMINOMAX", classe: "FOLIAR", unidade: "LITRO", quantidade: 20 },
  { produto: "CROP GREEN", classe: "FOLIAR", unidade: "LITRO", quantidade: 20 },
  { produto: "FERTILIZANTE MINERAL", classe: "FOLIAR", unidade: "KG", quantidade: 200 },
  { produto: "MAGNESIO", classe: "FOLIAR", unidade: "KG", quantidade: 200 },
  { produto: "SULFATO DE ZINCO", classe: "FOLIAR", unidade: "KG", quantidade: 200 },
  { produto: "SOLUÇÃO NITROGENADA", classe: "FOLIAR", unidade: "LITRO", quantidade: 200 },
  { produto: "ASGARD IMPACT", classe: "FOLIAR", unidade: "LITRO", quantidade: 1740 },
  { produto: "HARVEST APEX", classe: "FOLIAR", unidade: "LITRO", quantidade: 2000 },
  { produto: "APROACH POWER", classe: "FUNGICIDA", unidade: "LITRO", quantidade: 1000 },
  { produto: "MIRAVIS PRO", classe: "FUNGICIDA", unidade: "LITRO", quantidade: 1000 },
  { produto: "BRAVONIL", classe: "FUNGICIDA", unidade: "LITRO", quantidade: 1000 },
  { produto: "FUSÃO", classe: "FUNGICIDA", unidade: "LITRO", quantidade: 1000 },
  { produto: "CORSO", classe: "FUNGICIDA", unidade: "LITRO", quantidade: 1000 },
  { produto: "ATUMUS", classe: "ADJUVANTE", unidade: "LITRO", quantidade: 1000 },
  { produto: "DROPON", classe: "ADJUVANTE", unidade: "LITRO", quantidade: 1000 },
  { produto: "BENTAZONA 600", classe: "HERBICIDA", unidade: "LITRO", quantidade: 300 },
  { produto: "DUAL GOLD", classe: "HERBICIDA", unidade: "LITRO", quantidade: 300 },
  { produto: "GLIFOSATO", classe: "HERBICIDA", unidade: "LITRO", quantidade: 300 }
];

produtos.forEach(async item => {
  await addDoc(collection(db, "estoque"), {
    produto: item.produto,
    classe: item.classe,
    unidade: item.unidade,
    quantidade: item.quantidade,
    tipo: "entrada",
    data: new Date().toISOString()
  });
});
