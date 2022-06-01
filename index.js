const adibBox = document.querySelector("#adib_place");
const body = document.querySelector("body");
const searchBtn = document.querySelector("#search_btn");
const searchInput = document.querySelector("#search");

const adiblarArr = JSON.parse(localStorage.getItem("adiblar")) || [
  {
    fullName: "Alisher Navoiy",
    year: "(1441 - 1501)",
    img: "https://xs.uz/upload/post/2018/04/05/189a3b5c409afb57c085e2f36a7bd8b00405.jpg",
    description: `Asl ismi Nizomiddin Mir Alisher. U Hirotda tugʻilib, shu yerda umrining asosiy qismini oʻtkazgan. Navoiyning otasi G‘iyosiddin Bahodir temuriylar xonadoniga yaqin boʻlgan. Sheʼr zavqi va isteʼdodi erta uygʻongan. Bolalikdayoq Farididdin Attorning „Mantiqut-tayr“ asarini yod olgan, Sharafiddin Ali Yazdiy nazariga tushgan, Mavlono Lutfiy yosh shoir isteʼdodiga yuqori baho bergan, Kamol Turbatiy eʼtirofini qozongan. Sayyid Hasan Ardasher, Pahlavon Muhammad kabi ustozlardan taʼlim olgan, Abdurahmon Jomiy bilan ijodiy hamkorlikda boʻlgan. Navoiy 1469 yilgacha temuriylar orasidagi ichki nizolar sababli Hirotdan yiroqroqda yashagan. Husayn Boyqaro Xuroson taxtiga oʻtirgach (1469), Navoiy hayoti va ijodida yangi bosqich boshlanadi, muhrdorlik (1469) mansabiga, vazirlik (1472) va Astrobod hokimligi (1487)ga tayinlanadi. 1480—1500 yillar mobaynida oʻz mablagʻlari hisobidan bir necha madrasa, 40 rabot (safardagi yoʻlovchilar toʻxtab oʻtish joyi), 17 masjid, 10 xonaqoh, 9 hammom, 9 koʻprik, 20 ta hovuz qurdiradi. Husayn Boyqaro Alisher Navoiyga „muqarrabi hazrati sultoniy“ („sulton hazratlarining eng yaqin kishisi“) degan unvonni beradi. Unga koʻra Navoiy davlatning barcha ishlariga aralasha olardi.`,
  },
  {
    fullName: "Abdulla Qodiriy",
    year: "(1894 - 1938)",
    img: "https://saviya.uz/wp-content/uploads/2017/04/abdulla_qodiriy-640x400.jpg?x94708",
    description: `Abdulla Qodiriy – yorqin, barchaga keng ma’lum shoir va yozuvchi, dramaturg va publitsist, o‘zbek adabiyotida roman janri asoschisi. Qodiriyning asarlari o‘zbek xalqi hayotiga bag‘ishlangan. Abdulla Qodiriyning nashr etilmagan XX asrning yigirmanchi yillari yozilgan sahna asari asosida rejissyor Mark Vayl o‘zining Toshkentdagi Ilhom teatrida “Oppoq qora laylak” sahna asarini qo‘ygan.

   Abdulla Qodiriy (Julqunboy) 1894 yil Toshkentda badavlat savdgar oilasida tug‘ilgan. Yoshlik va o‘smirlik yillardagi muhit – savdogarlar, boylar va kambag‘al dehqonlar, iqtidorli hunarmandlar, doim muhtojlikda kun kechiruvchi kosiblar va yersiz dehqonlardan iborat bo‘lgan.  Ushbu mehnatkash odamlar dunyosi, shuningdek, shahar ziyolilari bo‘lajak yozuvchi shakllanishida muhim o‘rin tutdi.`,
  },
  {
    fullName: "Abdulla Avloniy",
    year: "(1878-1934)",
    img: "http://ziyouz.uz/wp-content/uploads/2013/06/abdulla-avloniy.jpg",
    description: `Mashhur o‘zbek ma’rifatparvari, shoiri va jamoat arbobi Abdulla Avloniy 1878 yil 12 iyulda Toshkentda hunarmand oilasida tug‘ilgan. Eski maktabda savod chiqardi, madrasada tahsil oldi. Oiladagi moddiy qiyinchiliklar tufayli bolaligidan odamlar eshigida mehnat qildi, g‘isht quyish, suvoqchilik, pechkachilik, duradgorlik, binokorlik kabi kasblar bilan shug‘ullandi, «Imoratchi usta» degan nom oladi.
    Abdulla Avloniy she’rlari 15 yoshidan boshlab matbuotda ko‘rina boshladi. Jadidchilik harakati rahbarlaridan biri bo‘lgan Avloniy 1904 yilda Toshkentning Mirobod mahallasida jadid maktabini, 1909 yilda «Jamiyati xayriya» uyushmasini tashkil etadi. 1905-1917 yillarda matbuotdagi qizg‘in faoliyati, ko‘plab publitsistik maqolalari bilan «bir yoqdan milliy islohot uchun mafkura hozirlag‘on, ikkinchi yoqdan el orasiga o‘zgarish tuxmini sochg‘on» ham( Abdulla Avloniy bo‘ldi. Avloniy o‘zi nashr etgan «Shuhrat» (1907) nomli gazetasi faoliyatini shunday baholagan edi.
    U Turkistonda birinchilardan bo‘lib maktabga geografiya, kimyo, xandasa, fizika fanlari kiritilishiga ta’sir ko‘rsatdi, ta’limni real turmush bilan bog‘lashga intildi, bir dars bilan boshqasi o‘rtasida muayyan tanaffusni, bir sinfdan ikkinchisiga o‘tishdagi imtihonni joriy etdi, ta’lim tizimining dunyoviy yo‘nalishini kuchaytirshiga alohida e’tibor berdi. Uning «Birinchi muallim» («Muallimi avval», 1909), «Ikkinchi muallim» («Muallimi soniy», 1912) nomli darsliklari, «Turkiy guliston yoxud axloq» (1913), «Gulistoni maktab» (1917), «Adabiyot yoxud milliy she’rlar» (1909-1916, 6 qism) kabi qo‘llanmalari maktablarda o‘qitilgan.
    Avloniy «Turon» (1917) gazetasiga «Yashasin xalq jumhuriyati» degan shiorni tanladi, «Turon» nomli teatr to‘garagini tashkil etib, iqtidorli yoshlarni to‘pladi, ayrim rollarni ijro etishda o‘zi ham qatnashdi. Shoir Afg‘onistonda elchi bo‘ldi, turli o‘quv yurtida dars berdi. Abdulla Avloniyning Hijron, Nobil, Indamas, Shuhrat, Surayyo, Shapaloq, Chol, Ab, Chegiboy degan taxalluslari bo‘lgai. U 1934 yil 24 avgustda Toshkentda vafot etdi. Avloniy ijodi bo‘yicha Begali Qosimov ilmiy izlanishlar olib borgan.`,
  },
  {
    fullName: "O'tkir Hoshimov",
    year: "(1941 - 2013)",
    img: "https://saviya.uz/wp-content/uploads/2017/04/otkir_hoshimov-1.jpg",
    description: `Oʻtkir Hoshimov Taniqli oʻzbek yozuvchisi va jamoat arbobi. 1941 yili 4 avgustda Toshkentda Doʻmbirobod mahallasida tugʻilgan. Toshkent (2013-yil 24-may Juma kuni Ogʻir hastalik tufayli Oilasi davrasida Toshkentda vafot etgan) Davlat universiteti filologiya fakultetida oʻqigan. Turli tahririyat va nashriyotlarda ishlagan. Hozirgi kunda Oʻzbekiston Respublikasi Oliy Majlisi qoʻmita raisi.

      Oʻtkir Hoshimov 1941 yil, 5 avgustda Toshkent shahrida oddiy bir oilada dunyoga keldi. Yozuvchining bolaligi urush va urushdan keyingi mashaqqatli davrga toʻgʻri keldi. „Oʻsha davrda non tanqis boʻlgani bilan kutubxonalarda kitob koʻp edi“¸ deya eslagan edi yozuvchi oʻz xotiralarida.
      
      Kitob oʻqish barobarida Oʻtkir Hoshimov pochtada xat tarqatuvchi boʻlib ishladi. Aynan mana shu ish Oʻtkir Hoshimovni oddiy odamlarning kitobdagi hayotdan butunlay boshqa turmushiga oshno qildi.
      
      Boʻlajak yozuvchi 1964-yilda Oʻzbekiston Milliy universitetining (sobiq ToshDU) filologiya fakulteti jurnalistika boʻlimini sirtdan tugatdi.
      
      1959 — 62 yillari „Qizil Oʻzbekiston“, 1963-66 y. „Toshkent haqiqati“ 1966-82 yillari „Toshkent oqshomi“ gazetalarida adabiy xodim boʻlib ishladi.`,
  },
  {
    fullName: "Muhammad Yusuf",
    year: "1954 – 2001)",
    img: "https://i.ytimg.com/vi/xNkphlIZevg/sddefault.jpg",
    description: `Oʻzbekiston xalq shoiri Muhammad Yusuf 1954 yil 26 aprelda Andijon viloyati, Marhamat tumanidagi Qovunchi qishlogʻida dehqon oilasida tavallud topdi. Toshkentdagi Rus tili va adabiyoti institutida (hozirgi Jahon tillari universiteti) tahsil oldi. Respublika Kitobsevarlar jamiyatida, “Toshkent oqshomi” gazetasida, Gʻafur Gʻulom nomidagi Adabiyot va sanʼat nashriyotida, “Tafakkur” jurnalida, “Oʻzbekiston ovozi” gazetasida xizmat qildi. Oʻzbekiston Prezidenti huzuridagi Davlat va jamiyat qurilish Akademiyasida tahsil olgach, 1998 yildan umrining oxirigacha Oʻzbekiston Yozuvchilar uyushmasida faoliyat yuritdi.

    Muhammad Yusuf avvalo xalq dardini baralla aytgan, yurt muhabbatini hech kimga oʻxshamagan misralarda taʼriflagan sheʼrlari, qoʻshiqlari bilan tanildi, shuhrat qozondi. El mehriga sazovor boʻldi.
    
    Mustaqillikning ilk davrlaridayoq “Hech kimga bermaymiz seni, Oʻzbekiston”, deya kurash maydoniga tushgan, Istiqlolni baralla kuylagan, vijdoni uygʻoq ijodkor Muhammad Yusufning hayot yoʻli, ijodi va qizgʻin ijtimoiy faoliyati yoshlarimiz uchun ibrat maktabi boʻlib xizmat qilmoqda. Uning “Tanish teraklar” (1985), “Bulbulga bir gapim bor” (1987), “Iltijo” (1988), “Uyqudagi qiz” (1989), “Halima ena allalari” (1989), “Ishq kemasi” (1990), “Koʻnglimda bir yor” (1991), “Bevafo koʻp ekan” (1991), “Erka kiyik” (1992), “Saylanma”, “Biz baxtli boʻlamiz”, “Osmonimga olib ketaman”, “Ulugʻimsan, Vatanim” singari oʻndan ortiq sheʼriy toʻplamlari adabiyotimizning oltin merosiga aylandi.
    
    Oʻzbekiston xalq shoiri Muhammad Yusuf oʻzbek sheʼriyati va qoʻshiqchiligini rivojlantirishdagi xizmatlari uchun 1996 yilda “Doʻstlik” ordeni bilan taqdirlangan.
    
    Muhammad Yusuf 2001 yil 1 avgustda 47 yoshida vafot etdi. Uning milliy adabiyotimiz va madaniyatimizni, xalqimiz maʼnaviyati, ongu tafakkurini yuksaltirish, yosh avlod qalbida oʻzlikni anglash, milliy gʻurur va iftixor tuygʻularini kamol toptirish borasidagi xizmatlarini inobatga olib, 2013 yilning 27 dekabrida Oʻzbekiston Respublikasi Prezidentining “Oʻzbekiston xalq shoiri Muhammad Yusuf tavalludining 60 yilligini nishonlash toʻgʻrisida”gi qarori eʼlon qilindi hamda shoirning tavallud ayyomi milliy adabiyotimizning haqiqiy bayrami sifatida tantana qilindi.`,
  },
  {
    fullName: "Nodir Jonuzoq",
    year: "(1993–1998)",
    img: "https://saviya.uz/wp-content/uploads/2017/04/nodir_jonuzoq-640x400.jpg?x94708",
    description: `Nodir Jonuzoq 1976 yil 14 martda Samarqand viloyatining Bulungʻur tumanida tugʻildi. Samarqand Davlat universitetining oʻzbek filologiyasi fakultetida tahsil oldi (1993–1998).

      Bir muddat (1998–1999) “Turkiston”, “Respublika” gazetalarida xizmat qildi. Shundan soʻng Oʻzbekiston Milliy teleradiokompaniyasida muharrir sifatida ish boshlab, keyinchalik “Oʻzbekiston” telekanalining “Maʼnaviyat”, “Musiqiy dasturlar” studiyalari bosh muharriri, “Madaniyat va maʼrifat” telekanalining “Madaniy-badiiy dasturlar” muharririyati bosh muharriri, “Madaniyat va maʼrifat” telekanali direktor oʻrinbosari vazifalarida faoliyat yuritdi (1999–2015). 2015 yildan Oʻzbekiston yoshlarining adabiy-ijtimoiy nashri – “Yoshlik” jurnali bosh muharriri lavozimida xizmat qilib keladi.
      
      Oʻquvchilik yillaridan oʻz sheʼrlari bilan tuman va viloyat gazetalarida qatnashib kelgan Nodir Jonuzoq talabalik paytida (1997) respublika yosh ijodkorlarining Zomin seminari gʻolibi boʻldi. “Tomchilar” nomli ilk kitobi Gʻafur Gʻulom nomidagi adabiyot va sanʼat nashriyoti tomonidan “Isteʼdod” (1997) ruknida chop etildi.
      
      Shundan soʻng uning “Sizni sevar edim” (2006), “Mehribonim” (2008) nomli sheʼriy toʻplamlari, “Oʻn yetti lahza”, “Nilufar”, “Siniq oy” kabi bir qator dostonlari dunyoga keldi. Shoir asarlari oʻz samimiyligi, tiniq tashbehlarga boyligi, ayni choqda jamiyatimizdagi evrilishlar, yangilanishlar ruhi aks ettirilgani bilan adabiy jamoatchilik va muxlislar eʼtiborini qozondi.
      
      Nodir Jonuzoq telejurnalist sifatida “Yozuvchi va zamon”, “Sheʼr va shuur”, “Gap chiqdi”, “Oq va qora”, “Shaxsiy fikr”, “Hayot goʻzal!”, “Ijodiy uchrashuvlar” singari koʻrsatuv va tokshoular tayyorladi. Shuningdek, uning ssenariylari asosida koʻplab videofilmlar tasvirga olindi. “Bobbi”, “Tafakkur oʻyinlari”, “Panda izidan” kabi chet el filmlarini, M. Lermontov, A. Blok kabi mashhur shoirlar sheʼrlarini ona tilimizga oʻgirdi.`,
  },
  {
    fullName: "Luqmon Boʻrixon",
    year: "(1965)",
    img: "https://saviya.uz/wp-content/uploads/2017/06/luqmon_borixon-640x400.jpg?x94708",
    description: `Luqmon Boʻrixon 1965 yilning 15 iyulida Qashqadaryo viloyati, Gʻuzor tumanining Yangiobod qishlogʻida tugʻildi. 23-oʻrta maktabni bitirgach, 1983–1985 yillarda harbiy xizmatni oʻtadi. Toshkent davlat universitetining jurnalistika fakultetida (1986–1991) tahsil oldi. Shundan soʻng “Turkiston”, “Maʼrifat” gazetalarida adabiy xodim, boʻlim mudiri, “Yoshlik” jurnali bosh muharriri oʻrinbosari vazifalarida xizmat qildi.

    “Begimqul katta” hikoyasi “Yoshlik” (1987) jurnalida chop etilib, ustozlar nazariga tushdi. Birinchi hikoyalar toʻplami “Yalangoyoq” (1991) “Choʻlpon” nashriyotida chop etildi. “Jaziramadagi odamlar” romani ikki qayta (2005 va 2012) bosildi. “Sirli muallim” (2006) nomli qissasi oʻqituvchilar hayotidan olib yozilgan asar sifatida Xalq taʼlimi vazirligi tanlovida (2006) gʻolib deb topildi. Navbatdagi “Xizr koʻrgan yigit” (2007), “Temiryoʻl” (2009) romanlari ham muxlislar tomonidan katta qiziqish bilan qarshi olindi. Sermahsul ijodkorning “Tun qaʼridagi shuʼla” (2002) nomli qissa va hikoyalar toʻplami, “Buyuk ipak yoʻli” (2012) badiiy-publitsistik maqolalar toʻplami, “Quyosh hali botmagan” qissalar toʻplami nashr etildi.
    
    Badiiy-publitsistik maqolalari uchun xalqaro “Oltin qalam” (2009) tanlovi gʻolibi boʻlgan Luqmon Boʻrixonning adabiyot sohasidagi xizmatlari munosib baholangan: 2007 yilda “Shuhrat” medali va 2012 yilda “Oʻzbekiston Respublikasida xizmat koʻrsatgan madaniyat xodimi” unvoni bilan taqdirlangan.
    
     `,
  },
  {
    fullName: "Ikrom Iskandar",
    year: "(1972)",
    img: "https://saviya.uz/wp-content/uploads/2017/07/ikrom_iskandar-640x400.jpg?x94708",
    description: `Ikrom Iskandar 1972 yil 10 sentyabrda Jizzax viloyati Doʻstlik tumanida tugʻildi. Oʻzbekiston Milliy universiteti jurnalistika fakultetida tahsil oldi.

    Uning ilk sheʼr va maqolalari 4-sinfda oʻqiyotgan kezlari tuman gazetasida, soʻngra respublika bolalar nashrlarida chop etila boshladi.
    
    Ijodiy faoliyatini Gʻallaorol tuman gazetasida boshlab, soʻngra “Oila va jamiyat”, “Maʼrifat” gazetalarida xizmat qildi.
    
    2008 yildan buyon Oʻzbekiston Respublikasi Prezidenti devonida masʼul vazifada ishlab keladi.
    
    Oʻtgan yillar davomida “Bir dasta gul” (1994), “Bahorni izlayman” (1995), “Bugungi naqllar” (2005), “Yomgʻirli fasl” (2006), “Hangoma va naqllar” (2008), “Yashil xirgoyi” (2010), “Fasllar ohangi” (2013) nomli sheʼriy va nasriy kitoblari chop etildi.
    
    Shoirning “Oʻzbekiston adabiyoti va sanʼati” haftaligida (2015) eʼlon qilingan Navoiy asarlari mutolaasidan ruhlanib yozilgan “Mumtoz ohanglarda” nomli turkumi oʻziga xos voqea boʻlganini taʼkidlash joiz. Ikrom Iskandarning yangi “Shamol qoʻshigʻi”(2015) sheʼriy kitobi sheʼriyat muxlislariga munosib sovgʻa boʻldi.`,
  },
  {
    fullName: "Gʻulom Mirzo ",
    year: "(1964)",
    img: "https://saviya.uz/wp-content/uploads/2017/06/gulom_mirzo-640x400.jpg?x94708",
    description: `Gʻulom Mirzo 1964 yilning 4 yanvarida Qashqadaryo viloyati, Qarshi tumanidagi Xushvaqt qishlogʻida tugʻildi. Toshkent davlat universiteti (hozirgi OʻzMU)ning oʻzbek filologiyasi fakultetida (1984–1989), Oʻzbekiston Respublikasi Prezidenti huzuridagi Davlat va jamiyat qurilishi akademiyasida (1996–1997) tahsil oldi. Mehnat faoliyatini Toshkent Davlat universiteti Tarjima nazariyasi va amaliyoti kafedrasida katta laborant sifatida boshlab (1989–1993), keyinchalik OʻzA Xalqaro axborot tahririyati yetakchi sharhlovchisi, bosh muharrir oʻrinbosari (1993–1996), Oʻzbekiston Respublikasi Prezidenti devoni Axborot markazi referenti, konsultanti (1996–1999), “Turkiston-press” nodavlat axborot agentligi bosh direktori oʻrinbosari (1989–2000), Oʻzbekiston Respublikasi Oliy Majlisi Demokratik institutlar, nodavlat tashkilotlar va fuqarolarning oʻzini oʻzi boshqarish organlari qoʻmitasi kotibi (2000–2001), OʻzA Respublika axboroti tahririyati bosh muharriri oʻrinbosari (2001–2003), “Mohiyat” gazetasi bosh muharriri (2003–2004), OʻzA Respublika axboroti tahririyati bosh muharririning birinchi oʻrinbosari, bosh muharriri (2004–2008), Oʻzbekiston Respublikasi Prezidentining Madaniyat, matbuot va ijodiy tashkilotlar ishlari boʻyicha Davlat maslahatchisi xizmati Axborot-tahrir guruhining yetakchi konsultanti (2008–2011), Respublika Maʼnaviyat va maʼrifat kengashi Respublika Maʼnaviyat targʻibot markazi rahbari (2011–2013) lavozimlarida xizmat qildi. 2013 yildan “Demokratlashtirish va inson huquqlari” jurnali bosh muharrir oʻrinbosari vazifasida faoliyat yuritadi.

    Ilk mashqlari bilan viloyat, tuman gazetalarida koʻrinib yurgan maktab oʻquvchisi Gʻulom Mirzo talabalik yillarida adabiy jamoatchilik nazariga tushdi. Respublika adabiy nashrlarida sheʼrlari, sheʼriy va nasriy tarjimalari bilan faol qatnasha boshladi. 1988 yilda Respublika yosh ijodkorlari 5-anjumani tomonidan nashrga tavsiya etilgan turkum sheʼrlari “Yoshlar ovozi” bayozida (1990), “Yolqin” nomli sheʼriy toʻplamda (1991) bosildi. Shundan soʻng shoirning “Yaxshiyam siz borsiz” (1994), “Unutilgan hur” (1997), “Oftobga qaytaman” (2008), “Qalb tomchilari” (2010) sheʼriy kitoblari nashr etildi.
    
    Gʻulom Mirzo publitsistika sohasida ham barakali ijod qilib, “Istiqlol va Amir Temur”, “Maʼnaviy islohotlar va mustaqil taraqqiyot yoʻli”, “Mahalla va maʼnaviyat”, “Aziz neʼmat maʼnaviyati”, “Istiqlol bogʻlari”, “Buyuk ehtirom ehromi”, “Navroʻzdan soʻng qish boʻlmas” kabi dolzarb mavzularda yuzlab publitsistik maqolalar yozdi. “Obod mahalla – obod mamlakat taraqqiyoti” nomli maqolalar kitobini nashr ettirdi (2015). Georg Gendelning “Amir Temur” musiqiy dramasini tarjima qildi (2015).
    
    Gʻulom Mirzo “Oʻzbekiston belgisi” koʻkrak nishoni (2000), Oʻzbekiston Respublikasida xizmat koʻrsatgan jurnalist faxriy unvoni (2008) bilan taqdirlangan.`,
  },
  {
    fullName: "Abdurahmon Akbar",
    year: "(1962–2015)",
    img: "https://saviya.uz/wp-content/uploads/2017/09/abdurahmon_akbar-640x400.jpg?x94708",
    description: `Oʻzbek bolalar adabiyoti rivojiga salmoqli hissa qoʻshgan Abdurahmon Akbar 1962 yil 22 aprelda Toshkent viloyati Yangiyoʻl tumanidagi Niyozboshi qishlogʻida ziyoli oilada tugʻildi. Oʻzbekiston Milliy universitetining jurnalistika fakulteti kechki boʻlimida (1979–1987) tahsil oldi. Armiya xizmatini quruvchi askarlarning “Stroitel” (“Binokor”) gazetasida (1981–1983) adabiy xodim sifatida oʻtadi. Xizmatdan qaytgach, Yangiyoʻl tumanidagi 25-maktabda ona tili va adabiyoti fanidan (1985–1986) dars berdi. 1986 yildan umrining oxirigacha “Choʻlpon” nomidagi bolalar nashriyoti matbaa ijodiy uyida xizmat qildi.

    Abdurahmon Akbarning ilk kitobi 1987 yilda, “Kichkintoy va paxtaoy” nomi bilan bosilib chiqdi (M. Qodirov bilan birgalikda). Shundan soʻng “Soʻzlovchi yomgʻir” (1990), “Ehtiyotkor toshbaqa” (1991), “Yozning tugʻilgan kuni” (1992), “Oʻyinqaroq bulutcha” (1996), “Oʻrdakcham” (2005), “Jonli savatcha” (2005), “Uyquchining tushlari” (2006), “Gonzik olib kelgan dori” (2006), “Eng katta mehr” (2006), “Niyozbosh istiqbol sari” (2007), “Bolalar bogʻchasi uchun sevimli ertaklar” (2009), “Mening doʻstim kompyuter” (2010) nomli 15 dan ortiq sheʼriy, adabiy-badiiy va tarjima kitoblari chop etildi. 1991 yili “Ehtiyotkor toshbaqa” nomli kitobi Usmon Nosir nomidagi mukofotga sazovor boʻldi.
    
    Abdurahmon Akbar tarjimasida “Texnikaning katta ensiklopediyasi”, “Kichkintoylar uchun jonivorlarning katta ensiklopediyasi”, “Jonivorlarning katta ensiklopediyasi”, “Jajji kichkintoylar uchun bilimlarning katta kitobi”, “Maktabgacha yoshdagi bolalar ensiklopediyasi”, “Sehrli qirollik oroli”, G. X. Andersenning “Ertaklar” kitobi, “Jajji kichkintoylar uchun ensiklopediya” deb nomlangan kichik yoshdagi oʻquvchilarga moʻljallangan ilmiy-maʼrifiy, badiiy kitoblar nashr etildi.
    
    Shoirning sheʼr va tarjimalari boshlangʻich sinf oʻquvchilarining “Ona tili”, “Oʻzbek tili”, “Oʻqish kitobi”, “Atrofimizdagi olam”, “Odobnoma” kabi darsliklaridan, shuningdek, kasb-hunar kollejlari oʻquvchilari uchun nashr etilgan “Bolalar adabiyoti” darsligi va “Oʻzbek bolalar adabiyoti” antologiyasidan joy oldi.
    
    Abdurahmon Akbar 2006 yili “Oʻzbekiston Respublikasida xizmat koʻrsatgan madaniyat xodimi” unvoni bilan taqdirlangan.`,
  },
  {
    fullName: "Abdunabi Hamro",
    year: "(1961)",
    img: "https://saviya.uz/wp-content/uploads/2017/12/abdunabi_hamro-640x400.jpg?x94708",
    description: `Abdunabi Hamro 1961 yilning 25 noyabrida Buxoro viloyatining Olot tumanida tugʻildi. Toshkent Madaniyat institutida tahsil oldi. Olot tuman madaniyat boʻlimi markaziy madaniyat uyi uslubshunosi (1984–1986), Guliston qishloq madaniyat uyi direktori (1986–1990), “Yangi hayot” tuman gazetasi xodimi (1990–1993), Oʻzbekiston Yozuvchilar uyushmasi Buxoro viloyati boʻlimi adabiy maslahatchisi (1993–1996), Olot tuman Bolalar va oʻsmirlar tarbiyaviy ishlari markazi toʻgarak rahbari (1996–1999), Buxoro viloyat teleradiokompaniyasi muharriri, viloyat radiosi bosh muharriri lavozimlarida (2001–2006) xizmat qildi. 2006 yildan “Olot hayoti” tuman gazetasi boʻlim mudiri vazifasida ishlab keladi.

    Abdunabi Hamroning “Xiyonat” nomli birinchi hikoyalar toʻplami 1993 yilda nashr etildi. Shundan soʻng uning “Oq alvasti” (1994), “Otam aytgan qoʻshiqlar” (2001), “Yirtqich” (2003), “Unutilgan qoʻshiq” (2005), “Olis manzillar sari” (2006), “Bolalikka sayohat” (2007), “Qishda ochilgan gul” (2008), “Vaqt daryosi” (2009), “Obi hayot yoʻli” (2010), “Xazinatoparlar” (2011), “Kurashib yashayman” (2011), “Daryoni yetaklagan oʻgʻlon” (2012), “Oltin darvozali yurt” (2012), “Sehrli soʻz” (2013), “Otadan qolgan yodgorlik” (2014), “Yillar va taqdirlar” (2014), “Ruhiyat ranglari” (2015), “Marhumlikka nomzodlar” (2015) kabi qissa, hikoya va sheʼrlar hamda ocherklar kitoblari dunyoga keldi.
    
     `,
  },
  {
    fullName: "Salim Ashur",
    year: "(1964)",
    img: "https://saviya.uz/wp-content/uploads/2017/06/salim_ashur-640x400.jpg?x94708",
    description: `Salim Ashur 1964 yil 16 dekabrda Tojikiston Respublikasi Qoʻrgʻontepa viloyati Qoʻrgʻontepa tumanida tugʻildi. 1974 yilda ularning oilasi Surxondaryo viloyatining Qiziriq tumaniga koʻchib kelishadi.

    Salim Ashur Qiziriq tumanidagi 17-maktabni tugatib (1982), Toshkent davlat universitetining jurnalistika fakultetida tahsil oldi (1982–1989).
    
    Ilk sheʼrlari 6-sinfda oʻqiyotgan kezlarida tuman gazetasida, respublika matbuotidagi birinchi sheʼri esa 1979 yili “Gulxan” jurnalida bosildi.
    
    Salim Ashur mehnat faoliyatini Madaniyat ishlari vazirligi Xalq ijodiyoti respublika markazida muharrirlikdan boshladi (1989–1990). “Saodat” jurnalida (1990–1994), “Oʻzbekiston ovozi” (1994–1996), “Yozuvchi” (1996–1997) gazetalarida turli vazifalarda, “Turkiston” va “Molodyoj Uzbekistana” gazetalari bosh muharriri (2010–2014) lavozimida xizmat qildi. 2014 yildan Oʻzbekiston Respublikasi Prezidenti Devonida masʼul vazifada ishlab kelmoqda.
    
    Salim Ashurning “Yashil giyoh” nomli birinchi kitobi 1994 yilda chop etildi. Shundan soʻng “Atirgul” (1994), “Siz ertaga kelasiz” (1999), “Atalgan kunlar” (2002), “Sensiz” (2003), “Darz” (2006), “Ona tilim” (2008), “Kelajakka qadam” (publitsistik maqolalar, 2008), “Mashinalar karvoni” (bolalar uchun sheʼrlar, 2010) kitoblari chop etildi.
    
    Matbuotdagi faoliyati qalamini charxladi, hayotni kengroq, chuqurroq oʻrganishda, voqelik psixologiyasini nozik ilgʻash va tuyishda katta omil boʻlib xizmat qildi. Ushbu yoʻnalishlar shoir ijodiga yangi badiiy-estetik gʻoyalar olib kirdi. Ijtimoiy mazmun bilan boyitdi, poetik obrazlarning hayotiyligini, samimiy va taʼsirchanligini taʼminladi. Shoir ijodidagi mavjud sifat oʻzgarishlari ketma-ket eʼlon qilingan majmualarida oʻz aksini topdi.
    
    Salim Ashur 2012 yilda “Oʻzbekistonda xizmat koʻrsatgan jurnalist” faxriy unvoni bilan taqdirlandi.
    
     `,
  },
  {
    fullName: "Dilshod Rajab",
    year: "(1964)",
    img: "https://saviya.uz/wp-content/uploads/2017/06/dilshod_rajab-640x400.jpg?x94708",
    description: `Dilshod Rajab 1964 yilning 7 dekabrida Buxoro viloyatining Shofirkon tumanida ziyoli oilasida tugʻildi. 1982 yil Navoiy nomidagi 4-oʻrta maktabni oltin medal bilan bitirib, Nizomiy nomidagi Toshkent Davlat pedagogika instituti (hozirgi universitet)ning oʻzbek tili va adabiyoti fakultetiga oʻqishga kirdi. 1983–1985 yillar harbiy xizmatda boʻlib qaytgach, tahsilni davom ettirdi. 1989 yil oliy dargoh tahsilini tugatib, oʻzi oʻqigan 4-oʻrta maktabda oʻqituvchi boʻlib ishladi. 1990–1993 yillar Nizomiy nomidagi TDPI aspiranturasida oʻqib, “80-yillar oʻzbek bolalar sheʼriyatida poetik mahoratning ayrim masalalari” mavzusida nomzodlik ishini himoya qildi.

    Dilshod Rajab Oʻzbekiston Davlat matbuot qoʻmitasida, Oʻzbekiston Yozuvchilar uyushmasi “Adabiyot jamgʻarmasi” nashriyotida, Respublika “Shahidlar xotirasi” xayriya jamgʻarmasida turli lavozimlarda ishladi (1994–2004). 2005 yildan Oʻzbekiston Respublikasi Favqulodda vaziyatlar vazirligining “Muhofaza+” jurnali, “Vaziyat” gazetasi birlashgan tahririyatida bosh muharrir sifatida faoliyat yuritadi.
    
    Ilk sheʼri “Gulxan” jurnalida 1978 yilda bosildi, “Qorqiz sovgʻa keltirdi” nomli ilk kitobi esa hammualliflikda 1989 yilda nashr etildi. Shundan soʻng, shoirning “Otamning bogʻi” (1996), “Daryo koʻngil” (1997), “Jilvon oʻgʻloni”, “Alifbo” (2001), “Tanish tovushlar” (2006), “Sukut sarhadi” (2006), “Oʻn oʻrtoq”, “Hamro polvon” (2011), “Poyezdning bolasi” (2013), “Baxshi bola – yaxshi bola” (2016) kabi bolalarga bagʻishlangan kitoblari dunyoga keldi.
    
    Dilshod Rajab, shuningdek, davriy matbuotda oʻzining ilmiy, ilmiy-ommabop va publitsistik maqolalari bilan ham muntazam qatnashib keladi. U ayni paytda Oʻzbekiston Yozuvchilar uyushmasi bolalar va oʻsmirlar adabiyoti kengashi aʼzosi sifatida ham faoliyat koʻrsatadi.
    
    Dilshod Rajab Jurnalistika sohasida VI “Oltin qalam” Milliy mukofoti uchun xalqaro tanlov sovrindori (2011 yil).
    
     `,
  },
];

const instance = axios.create({
  baseURL: "https://holidayapi.com",
  timeout: 2000,
  headers: {
    key: "062d0131-e0cf-4e5d-8653-7011fcc0f189",
  },
});

const getHolidays = (page = 1) => {
  instance
    .get(`/v${page}/holidays`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

getHolidays();

const getElement = (elementName, attrs = {}, father) => {
  const element = document.createElement(elementName);

  for (const attrsKey in attrs) {
    element[attrsKey] = attrs[attrsKey];
  }

  father && father.append(element);

  return element;
};

const addAdib = (adib) => {
  adiblarArr.push(adib);
  localStorage.setItem("adiblar", JSON.stringify(adiblarArr));
  renderAdiblar();
};

const createModal = (adib) => {
  const modal = getElement("div", { className: "my_modal" }, body);
  body.classList.add("modal-hide");

  const removeModal = () => {
    modal.remove();
    body.classList.remove("modal-hide");
  };

  const help = getElement("div", { className: "modal-help" }, modal);

  const modal_content = getElement(
    "div",
    { className: "my-modal-content" },
    help
  );

  getElement(
    "i",
    { className: "close fa-solid fa-xmark", onclick: removeModal },
    modal_content
  );
  const row = getElement("div", { className: "row" }, modal_content);
  getElement(
    "div",
    {
      className: "col-md-6 col-sm-12",
      innerHTML: ` <img
        class="img-fluid w-100"
        src="${adib.img}"
        />`,
    },
    row
  );

  const col = getElement("div", { className: "col-md-6 col-sm-12" }, row);
  getElement(
    "div",
    {
      className: "modal-actions",
      innerHTML: `<h2 class="primary-text">${adib.fullName}</h2>
        <p class="secondary-text">${adib.year}</p>
      <p class="text">${adib.description}</p>`,
    },
    col
  );

  modal.addEventListener("click", (e) => {
    e.target === help && removeModal();
  });
};

const renderAdiblar = (search = "") => {
  adibBox.innerHTML = "";

  adiblarArr.length > 0
    ? adiblarArr
        .filter((adib) =>
          adib.fullName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((adib) => {
          const col = getElement(
            "div",
            {
              className: "col-xxl-3 col-xxl-4 col-md-6",
            },
            adibBox
          );
          const adib_box = getElement(
            "div",
            { className: "adib-box mb-4" },
            col
          );
          getElement(
            "img",
            { src: adib.img, className: "img-fluid w-100" },
            adib_box
          );
          const content = getElement(
            "div",
            { className: "adib-box__content" },
            adib_box
          );
          getElement(
            "h3",
            { className: "adib-text", innerText: adib.fullName },
            content
          );
          getElement(
            "p",
            { className: "second-text", innerText: adib.year },
            content
          );
          const d = getElement(
            "div",
            { className: "adib-box__footer d-flex justify-content-end" },
            content
          );
          getElement(
            "button",
            {
              className: "link",
              innerText: "To'liq ma'lumot",
              onclick: () => {
                createModal(adib);
              },
            },
            d
          );
        })
    : getElement(
        "a",
        {
          className: "secondary-text text-center py-3",
          innerText: "Hali adiblar mavjud emas...",
          href: "#add",
        },
        adibBox
      );
};
renderAdiblar();

const search = () => {
  document.querySelector("#adiblar").scrollIntoView();
  renderAdiblar(searchInput.value);
};

searchBtn.addEventListener("click", () => {
  search();
  searchInput.value = "";
});
