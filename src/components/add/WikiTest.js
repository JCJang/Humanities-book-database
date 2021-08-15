import {parseInfo} from 'infobox-parser'
import wiki from 'wikijs'
import {useEffect, useState} from 'react'
const WikiTest = ({author}) => {

const [authorWikiData, setAuthorWikiData] = useState("")


const beauvoirQuery = [
  {
    "title": "Simone de Beauvoir",
    "extract": "Simone Lucie Ernestine Marie Bertrand de Beauvoir (UK: , US: ; French: [simɔn də bovwaʁ] (listen); 9 January 1908 – 14 April 1986) was a French writer, intellectual, existentialist philosopher, political activist, feminist, and social theorist. Though she did not consider herself a philosopher, she had a significant influence on both feminist existentialism and feminist theory.Beauvoir wrote novels, essays, biographies, autobiographies and monographs on philosophy, politics, and social issues. She was known for her 1949 treatise The Second Sex, a detailed analysis of women's oppression and a foundational tract of contemporary feminism; and for her novels, including She Came to Stay and The Mandarins. Her most enduring contribution to literature is her memoirs, notably the first volume, “Mémoires d’une jeune fille rangée” (1958), which have a warmth and descriptive power. She won the 1954 Prix Goncourt, the 1975 Jerusalem Prize, and the 1978 Austrian State Prize for European Literature.  She was also known for her open, lifelong relationship with French philosopher Jean-Paul Sartre.",
    "categories": [
        "Category:1908 births",
        "Category:1986 deaths",
        "Category:20th-century French non-fiction writers",
        "Category:20th-century French novelists",
        "Category:20th-century French philosophers",
        "Category:20th-century French women writers",
        "Category:20th-century memoirists",
        "Category:AC with 29 elements",
        "Category:All articles needing additional references",
        "Category:All articles with specifically marked weasel-worded phrases"
    ],
    "extlinks": [
        "http://cantic.bnc.cat/registres/CUCId/a10468602",
        "http://data.rero.ch/02-A002981784",
        "http://data.rero.ch/02-A010050173",
        "http://www.bncatalogo.cl/F?func=direct&local_base=red10&doc_number=000035759",
        "http://www.britannica.com/women/article-9014010",
        "http://articles.chicagotribune.com/1998-09-27/entertainment/9809270154_1_beauvoir-novelist-nelson-algren-simone",
        "http://www.newYorker.com/archive/2005/09/26/050926crbo_books?currentPage=all",
        "http://www.oxfordreference.com/view/10.1093/acref/9780195148909.001.0001/acref-9780195148909-e-90",
        "http://www.theguardian.com/books/2020/apr/29/simone-de-beauvoir-too-intimate-novel-to-be-published-after-75-year-les-inseparables",
        "http://medhum.med.nyu.edu/view/417",
        "http://www.iep.utm.edu/beauvoir",
        "http://www.iep.utm.edu/beauvoir/",
        "http://www.iep.utm.edu/beauvoir/#H1",
        "http://catalogo.bne.es/uhtbin/authoritybrowse.cgi?action=display&authority_id=XX883908",
        "http://katalog.nsk.hr/F/?func=direct&doc_number=000004253&local_base=nsk10",
        "http://uli.nli.org.il/F/?func=direct&doc_number=000016900&local_base=nlx10",
        "http://authorscalendar.info/beauvoir.htm",
        "http://data.bibliotheken.nl/id/thes/p068311818",
        "//doi.org/10.1111%2Fj.1527-2001.1999.tb01251.x",
        "http://www.theparisreview.org/interviews/4444/the-art-of-fiction-no-35-simone-de-beauvoir",
        "http://worldcat.org/oclc/907794335",
        "http://id.worldcat.org/fast/48716/",
        "//www.worldcat.org/issn/1095-5054",
        "//www.worldcat.org/oclc/1097366004",
        "//www.worldcat.org/oclc/11814265",
        "//www.worldcat.org/oclc/318223176",
        "//www.worldcat.org/oclc/465003710",
        "//www.worldcat.org/oclc/600674472",
        "//www.worldcat.org/oclc/796008155",
        "//www.worldcat.org/oclc/907794335",
        "http://mak.bn.org.pl/cgi-bin/KHW/makwww.exe?BM=1&NU=1&IM=4&WI=9810632312205606",
        "http://sounds.bl.uk/View.aspx?item=024M-C0095X0532XX-0100V0.xml",
        "http://www.bbc.co.uk/programmes/b010dp15",
        "http://www.bbc.co.uk/radio4/womanshour/01/2008_04_tue.shtml",
        "http://books.guardian.co.uk/authors/author/0,5917,-51,00.html",
        "https://nla.gov.au/anbd.aut-an35015999",
        "https://trove.nla.gov.au/people/791201",
        "https://www.biography.com/scholar/simone-de-beauvoir",
        "https://books.google.com/books?id=5uCeWIzdFwkC&pg=PA249",
        "https://books.google.com/books?id=HU71rmuh7rgC&pg=PA9",
        "https://books.google.com/books?id=KYstDwAAQBAJ&pg=PT11",
        "https://books.google.com/books?id=kuztAAAAMAAJ&pg=PA12",
        "https://books.google.com/books?id=zZJ7bfoPSksC&pg=PA135",
        "https://newrepublic.com/article/118617/anne-hollander-reviews-simone-de-beauvoir-biography-deidre-bair",
        "https://www.newyorker.com/archive/2005/09/26/050926crbo_books?currentPage=all",
        "https://www.newyorker.com/magazine/2005/09/26/stand-by-your-man",
        "https://www.nytimes.com/2010/05/30/books/excerpt-introduction-second-sex.html",
        "https://www.nytimes.com/2018/06/29/books/review/simone-de-beauvoir-second-sex-manuscript.html",
        "https://www.nytimes.com/books/98/12/06/reviews/981206.06udovitt.html",
        "https://www.nytimes.com/books/first/d/debeauvoir-love.html",
        "https://www.parisunlocked.com/best-of-paris/parks-and-gardens/a-stroll-through-montparnasse-cemetery-in-paris/",
        "https://www.theglobeandmail.com/books/review-the-second-sex-by-simone-de-beauvoir/article1615327",
        "https://www.theguardian.com/books/1999/jun/06/classics.simonedebeauvoir",
        "https://www.theguardian.com/books/2008/jan/08/top10s.debeauvoir",
        "https://www.theguardian.com/world/2001/feb/24/jonhenley",
        "https://www.theguardian.com/world/2005/jun/10/gender.politicsphilosophyandsociety",
        "https://www.upi.com/Top_News/2020/01/09/UPI-Almanac-for-Thursday-Jan-9-2020/6871578415895/",
        "https://aleph.nkp.cz/F/?func=find-c&local_base=aut&ccl_term=ica=jn19990000561&CON_LNG=ENG",
        "https://www.getty.edu/vow/ULANFullDisplay?find=&role=&nation=&subjectid=500341255",
        "https://plato.stanford.edu/archives/fall2010/entries/beauvoir/",
        "https://plato.stanford.edu/archives/fall2015/entries/beauvoir/",
        "https://plato.stanford.edu/archives/win2017/entries/feminism-gender/",
        "https://plato.stanford.edu/entries/beauvoir/",
        "https://catalog.vsc.edu/lscfind/Record/154795/TOC#tabnav",
        "https://catalogue.bnf.fr/ark:/12148/cb11890854p",
        "https://data.bnf.fr/ark:/12148/cb11890854p",
        "https://www.idref.fr/026713144",
        "https://id.loc.gov/authorities/names/n80005123",
        "https://data.nlg.gr/resource/authority/record159668",
        "https://d-nb.info/gnd/118507877",
        "https://opac.vatlib.it/auth/detail/495_90695",
        "https://ci.nii.ac.jp/author/DA00351446?l=en",
        "https://id.ndl.go.jp/auth/ndlna/00432648",
        "https://nl.go.kr/authorities/resource/KAC199601967",
        "https://kopkatalogs.lv/F?func=direct&local_base=lnc10&doc_number=000027307&P_CON_LNG=ENG",
        "https://authority.bibsys.no/authority/rest/authorities/html/90067665",
        "https://archive.org/details/feminisminourtim0000unse/page/5",
        "https://archive.org/search.php?query=((subject:%22Beauvoir,%20Simone%20de%22%20OR%20subject:%22Beauvoir,%20Simone%20d.%22%20OR%20subject:%22Beauvoir,%20S.%20d.%22%20OR%20subject:%22Simone%20de%20Beauvoir%22%20OR%20subject:%22Simone%20d.%20Beauvoir%22%20OR%20subject:%22S.%20d.%20Beauvoir%22%20OR%20subject:%22Beauvoir,%20Simone%22%20OR%20subject:%22Simone%20Beauvoir%22%20OR%20creator:%22Simone%20de%20Beauvoir%22%20OR%20creator:%22Simone%20d.%20Beauvoir%22%20OR%20creator:%22S.%20d.%20Beauvoir%22%20OR%20creator:%22S.%20de%20Beauvoir%22%20OR%20creator:%22Beauvoir,%20Simone%20de%22%20OR%20creator:%22Beauvoir,%20Simone%20d.%22%20OR%20creator:%22Beauvoir,%20S.%20d.%22%20OR%20creator:%22Beauvoir,%20S.%20de%22%20OR%20creator:%22Simone%20Beauvoir%22%20OR%20creator:%22Beauvoir,%20Simone%22%20OR%20title:%22Simone%20de%20Beauvoir%22%20OR%20title:%22Simone%20d.%20Beauvoir%22%20OR%20title:%22S.%20d.%20Beauvoir%22%20OR%20title:%22Simone%20Beauvoir%22%20OR%20description:%22Simone%20de%20Beauvoir%22%20OR%20description:%22Simone%20d.%20Beauvoir%22%20OR%20description:%22S.%20d.%20Beauvoir%22%20OR%20description:%22Beauvoir,%20Simone%20de%22%20OR%20description:%22Beauvoir,%20Simone%20d.%22%20OR%20description:%22Simone%20Beauvoir%22%20OR%20description:%22Beauvoir,%20Simone%22)%20OR%20(%221908-1986%22%20AND%20Beauvoir))%20AND%20(-mediatype:software)",
        "https://web.archive.org/web/20111213135908/http://www.britannica.com/women/article-9014010",
        "https://web.archive.org/web/20150912233548/https://newrepublic.com/article/118617/anne-hollander-reviews-simone-de-beauvoir-biography-deidre-bair",
        "https://web.archive.org/web/20151208065459/https://catalog.vsc.edu/lscfind/Record/154795/TOC#tabnav",
        "https://web.archive.org/web/20190413154026/https://www.theguardian.com/books/2008/jan/08/top10s.debeauvoir",
        "https://web.archive.org/web/20190413171557/https://www.theguardian.com/books/1999/jun/06/classics.simonedebeauvoir",
        "https://isni.org/isni/0000000120984228",
        "https://isni.org/isni/0000000368634627",
        "https://www.marxists.org/reference/subject/ethics/de-beauvoir/2nd-sex/introduction.htm",
        "https://snaccooperative.org/ark:/99166/w6571cwc",
        "https://viaf.org/viaf/2466221",
        "https://www.wikidata.org/wiki/Q7197#identifiers",
        "https://www.worldcat.org/identities/lccn-n80005123",
        "https://www.worldcat.org/oclc/1097366004",
        "https://www.worldcat.org/oclc/11814265",
        "https://libris.kb.se/auth/218306",
        "https://archive.today/20200115192229/https://www.upi.com/Top_News/2020/01/09/UPI-Almanac-for-Thursday-Jan-9-2020/6871578415895/",
        "https://iai.tv/articles/what-is-authentic-love-a-view-from-simone-de-beauvoir-auid-918"
    ],
    "langlinks": [
        {
            "lang": "af",
            "url": "https://af.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "als",
            "url": "https://als.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "an",
            "url": "https://an.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ar",
            "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%8A%D9%85%D9%88%D9%86_%D8%AF%D9%8A_%D8%A8%D9%88%D9%81%D9%88%D8%A7%D8%B1",
            "*": "سيمون دي بوفوار"
        },
        {
            "lang": "arz",
            "url": "https://arz.wikipedia.org/wiki/%D8%B3%D9%8A%D9%85%D9%88%D9%86_%D8%AF%D9%89_%D8%A8%D9%88%D9%81%D9%88%D8%A7%D8%B1",
            "*": "سيمون دى بوفوار"
        },
        {
            "lang": "ast",
            "url": "https://ast.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "avk",
            "url": "https://avk.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ay",
            "url": "https://ay.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "az",
            "url": "https://az.wikipedia.org/wiki/Simona_de_Bovuar",
            "*": "Simona de Bovuar"
        },
        {
            "lang": "azb",
            "url": "https://azb.wikipedia.org/wiki/%D8%B3%DB%8C%D9%85%D9%88%D9%86_%D8%AF%D9%88_%D8%A8%D9%88%D8%A7%D8%B1",
            "*": "سیمون دو بوار"
        },
        {
            "lang": "ba",
            "url": "https://ba.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D0%B5_%D0%91%D0%BE%D0%B2%D1%83%D0%B0%D1%80",
            "*": "Симона де Бовуар"
        },
        {
            "lang": "bat-smg",
            "url": "https://bat-smg.wikipedia.org/wiki/S%C4%97muona_de_Buovuar",
            "*": "Sėmuona de Buovuar"
        },
        {
            "lang": "bcl",
            "url": "https://bcl.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "be",
            "url": "https://be.wikipedia.org/wiki/%D0%A1%D1%96%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D1%8D_%D0%91%D0%B0%D0%B2%D1%83%D0%B0%D1%80",
            "*": "Сімона дэ Бавуар"
        },
        {
            "lang": "be-x-old",
            "url": "https://be-tarask.wikipedia.org/wiki/%D0%A1%D1%8B%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D1%8D_%D0%91%D0%B0%D0%B2%D1%83%D0%B0%D1%80",
            "*": "Сымона дэ Бавуар"
        },
        {
            "lang": "bg",
            "url": "https://bg.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD_%D0%B4%D1%8C%D0%BE_%D0%91%D0%BE%D0%B2%D0%BE%D0%B0%D1%80",
            "*": "Симон дьо Бовоар"
        },
        {
            "lang": "bn",
            "url": "https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A6%BF%E0%A6%AE%E0%A6%A8_%E0%A6%A6%E0%A7%8D%E0%A6%AF_%E0%A6%AC%E0%A7%8B%E0%A6%AD%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0",
            "*": "সিমন দ্য বোভোয়ার"
        },
        {
            "lang": "br",
            "url": "https://br.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "bs",
            "url": "https://bs.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ca",
            "url": "https://ca.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ce",
            "url": "https://ce.wikipedia.org/wiki/%D0%91%D0%BE%D0%B2%D1%83%D0%B0%D1%80,_%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D0%B5",
            "*": "Бовуар, Симона де"
        },
        {
            "lang": "ckb",
            "url": "https://ckb.wikipedia.org/wiki/%D8%B3%DB%8C%D9%85%DB%86%D9%86_%D8%AF%DB%8E_%D8%A8%DB%86%DA%A4%D9%88%D8%A7%D8%B1",
            "*": "سیمۆن دێ بۆڤوار"
        },
        {
            "lang": "co",
            "url": "https://co.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "cs",
            "url": "https://cs.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "cy",
            "url": "https://cy.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "da",
            "url": "https://da.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "de",
            "url": "https://de.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "diq",
            "url": "https://diq.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "el",
            "url": "https://el.wikipedia.org/wiki/%CE%A3%CE%B9%CE%BC%CF%8C%CE%BD_%CE%BD%CF%84%CE%B5_%CE%9C%CF%80%CE%BF%CE%B2%CE%BF%CF%85%CE%AC%CF%81",
            "*": "Σιμόν ντε Μποβουάρ"
        },
        {
            "lang": "eo",
            "url": "https://eo.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "es",
            "url": "https://es.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "et",
            "url": "https://et.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "eu",
            "url": "https://eu.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "fa",
            "url": "https://fa.wikipedia.org/wiki/%D8%B3%DB%8C%D9%85%D9%88%D9%86_%D8%AF%D9%88_%D8%A8%D9%88%D9%88%D8%A7%D8%B1",
            "*": "سیمون دو بووار"
        },
        {
            "lang": "fi",
            "url": "https://fi.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "fo",
            "url": "https://fo.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "fr",
            "url": "https://fr.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ga",
            "url": "https://ga.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "gl",
            "url": "https://gl.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "gn",
            "url": "https://gn.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "he",
            "url": "https://he.wikipedia.org/wiki/%D7%A1%D7%99%D7%9E%D7%95%D7%9F_%D7%93%D7%94_%D7%91%D7%95%D7%91%D7%95%D7%90%D7%A8",
            "*": "סימון דה בובואר"
        },
        {
            "lang": "hi",
            "url": "https://hi.wikipedia.org/wiki/%E0%A4%B8%E0%A4%BF%E0%A4%AE%E0%A5%8B%E0%A4%A8_%E0%A4%A6_%E0%A4%AC%E0%A5%8B%E0%A4%89%E0%A4%86%E0%A4%B0",
            "*": "सिमोन द बोउआर"
        },
        {
            "lang": "hif",
            "url": "https://hif.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "hr",
            "url": "https://hr.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "hu",
            "url": "https://hu.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "hy",
            "url": "https://hy.wikipedia.org/wiki/%D5%8D%D5%AB%D5%B4%D5%B8%D5%B6%D5%A1_%D5%A4%D5%A8_%D4%B2%D5%B8%D5%BE%D5%B8%D6%82%D5%A1%D6%80",
            "*": "Սիմոնա դը Բովուար"
        },
        {
            "lang": "ia",
            "url": "https://ia.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "id",
            "url": "https://id.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ilo",
            "url": "https://ilo.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "io",
            "url": "https://io.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "is",
            "url": "https://is.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "it",
            "url": "https://it.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ja",
            "url": "https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A2%E3%83%BC%E3%83%8C%E3%83%BB%E3%83%89%E3%83%BB%E3%83%9C%E3%83%BC%E3%83%B4%E3%82%A9%E3%83%AF%E3%83%BC%E3%83%AB",
            "*": "シモーヌ・ド・ボーヴォワール"
        },
        {
            "lang": "jv",
            "url": "https://jv.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ka",
            "url": "https://ka.wikipedia.org/wiki/%E1%83%A1%E1%83%98%E1%83%9B%E1%83%9D%E1%83%9C_%E1%83%93%E1%83%94_%E1%83%91%E1%83%9D%E1%83%95%E1%83%A3%E1%83%90%E1%83%A0%E1%83%98",
            "*": "სიმონ დე ბოვუარი"
        },
        {
            "lang": "kk",
            "url": "https://kk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D0%B5_%D0%91%D0%BE%D0%B2%D1%83%D0%B0%D1%80",
            "*": "Симона де Бовуар"
        },
        {
            "lang": "ko",
            "url": "https://ko.wikipedia.org/wiki/%EC%8B%9C%EB%AA%AC_%EB%93%9C_%EB%B3%B4%EB%B6%80%EC%95%84%EB%A5%B4",
            "*": "시몬 드 보부아르"
        },
        {
            "lang": "ku",
            "url": "https://ku.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "la",
            "url": "https://la.wikipedia.org/wiki/Simona_de_Beauvoir",
            "*": "Simona de Beauvoir"
        },
        {
            "lang": "lb",
            "url": "https://lb.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "li",
            "url": "https://li.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "lt",
            "url": "https://lt.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "lv",
            "url": "https://lv.wikipedia.org/wiki/Simona_de_Bovu%C4%81ra",
            "*": "Simona de Bovuāra"
        },
        {
            "lang": "mg",
            "url": "https://mg.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "mk",
            "url": "https://mk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD_%D0%B4%D0%B5_%D0%91%D0%BE%D0%B2%D0%BE%D0%B0%D1%80",
            "*": "Симон де Бовоар"
        },
        {
            "lang": "ml",
            "url": "https://ml.wikipedia.org/wiki/%E0%B4%B8%E0%B4%BF%E0%B4%AE%E0%B5%8B%E0%B5%BA_%E0%B4%A6_%E0%B4%AC%E0%B5%8A%E0%B4%B5",
            "*": "സിമോൺ ദ ബൊവ"
        },
        {
            "lang": "mn",
            "url": "https://mn.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D0%B5_%D0%91%D0%BE%D0%B2%D1%83%D0%B0%D1%80",
            "*": "Симона де Бовуар"
        },
        {
            "lang": "mr",
            "url": "https://mr.wikipedia.org/wiki/%E0%A4%B8%E0%A4%BF%E0%A4%AE%E0%A5%8B%E0%A4%A8_%E0%A4%A6%E0%A4%BF_%E0%A4%AC%E0%A5%8B%E0%A4%B5%E0%A5%8D%E0%A4%B9%E0%A4%BE",
            "*": "सिमोन दि बोव्हा"
        },
        {
            "lang": "ms",
            "url": "https://ms.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "my",
            "url": "https://my.wikipedia.org/wiki/%E1%80%86%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA%E1%80%99%E1%80%BD%E1%80%94%E1%80%BA%E1%80%92%E1%80%AE_%E1%80%97%E1%80%BB%E1%80%B0%E1%80%B8%E1%80%97%E1%80%BD%E1%80%AC%E1%80%B8",
            "*": "ဆိုင်မွန်ဒီ ဗျူးဗွား"
        },
        {
            "lang": "myv",
            "url": "https://myv.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D0%B5_%D0%91%D0%BE%D0%B2%D1%83%D0%B0%D1%80",
            "*": "Симона де Бовуар"
        },
        {
            "lang": "mzn",
            "url": "https://mzn.wikipedia.org/wiki/%D8%B3%DB%8C%D9%85%D9%88%D9%86_%D8%AF%D9%88%D8%A8%D9%88%D9%88%D8%A7%D8%B1",
            "*": "سیمون دوبووار"
        },
        {
            "lang": "new",
            "url": "https://new.wikipedia.org/wiki/%E0%A4%B8%E0%A4%BF%E0%A4%AE%E0%A5%8B%E0%A4%A8%E0%A5%8D_%E0%A4%A6%E0%A5%87_%E0%A4%AC%E0%A5%80%E0%A4%89%E0%A4%AD%E0%A5%8D%E0%A4%B5%E0%A4%BE",
            "*": "सिमोन् दे बीउभ्वा"
        },
        {
            "lang": "nl",
            "url": "https://nl.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "nn",
            "url": "https://nn.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "nb",
            "url": "https://no.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "nov",
            "url": "https://nov.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "oc",
            "url": "https://oc.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "olo",
            "url": "https://olo.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "pa",
            "url": "https://pa.wikipedia.org/wiki/%E0%A8%B8%E0%A8%BF%E0%A8%AE%E0%A9%8B%E0%A8%A8_%E0%A8%A6_%E0%A8%AC%E0%A9%8B%E0%A8%B5%E0%A9%81%E0%A8%86%E0%A8%B0",
            "*": "ਸਿਮੋਨ ਦ ਬੋਵੁਆਰ"
        },
        {
            "lang": "pcd",
            "url": "https://pcd.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "pl",
            "url": "https://pl.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "pms",
            "url": "https://pms.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "pnb",
            "url": "https://pnb.wikipedia.org/wiki/%D8%B3%DB%8C%D9%85%D9%88%D9%86_%D8%AF%D8%A7_%D8%A8%D9%88%D9%88%D8%A7%D8%B1",
            "*": "سیمون دا بووار"
        },
        {
            "lang": "pt",
            "url": "https://pt.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "qu",
            "url": "https://qu.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ro",
            "url": "https://ro.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ru",
            "url": "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B2%D1%83%D0%B0%D1%80,_%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D0%B5",
            "*": "Бовуар, Симона де"
        },
        {
            "lang": "rue",
            "url": "https://rue.wikipedia.org/wiki/%D0%A1%D1%96%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D0%B5_%D0%91%D0%BE%D0%B2%D1%83%D0%B0%D1%80",
            "*": "Сімона де Бовуар"
        },
        {
            "lang": "sah",
            "url": "https://sah.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D0%B5_%D0%91%D0%BE%D0%B2%D1%83%D0%B0%D1%80",
            "*": "Симона де Бовуар"
        },
        {
            "lang": "sc",
            "url": "https://sc.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "sco",
            "url": "https://sco.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "sh",
            "url": "https://sh.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "si",
            "url": "https://si.wikipedia.org/wiki/%E0%B7%83%E0%B7%92%E0%B6%B8%E0%B7%9C%E0%B6%B1%E0%B7%8A_%E0%B6%AF_%E0%B6%B6%E0%B7%9D%E0%B7%80%E0%B7%8F",
            "*": "සිමොන් ද බෝවා"
        },
        {
            "lang": "simple",
            "url": "https://simple.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "sk",
            "url": "https://sk.wikipedia.org/wiki/Simone_de_Beauvoirov%C3%A1",
            "*": "Simone de Beauvoirová"
        },
        {
            "lang": "sl",
            "url": "https://sl.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "sq",
            "url": "https://sq.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "sr",
            "url": "https://sr.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD_%D0%B4%D0%B5_%D0%91%D0%BE%D0%B2%D0%BE%D0%B0%D1%80",
            "*": "Симон де Бовоар"
        },
        {
            "lang": "sv",
            "url": "https://sv.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "sw",
            "url": "https://sw.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "ta",
            "url": "https://ta.wikipedia.org/wiki/%E0%AE%9A%E0%AE%BF%E0%AE%AE%E0%AF%8B%E0%AE%A9%E0%AF%8D_%E0%AE%A4_%E0%AE%AA%E0%AF%8A%E0%AE%B5%E0%AE%BE%E0%AE%B0%E0%AF%8D",
            "*": "சிமோன் த பொவார்"
        },
        {
            "lang": "th",
            "url": "https://th.wikipedia.org/wiki/%E0%B8%8B%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B8%99_%E0%B9%80%E0%B8%94%E0%B8%AD_%E0%B9%82%E0%B8%9A%E0%B8%A7%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C",
            "*": "ซีมอน เดอ โบวัวร์"
        },
        {
            "lang": "tl",
            "url": "https://tl.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "tr",
            "url": "https://tr.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "tt",
            "url": "https://tt.wikipedia.org/wiki/Simona_de_Bovuar",
            "*": "Simona de Bovuar"
        },
        {
            "lang": "uk",
            "url": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B0_%D0%B4%D0%B5_%D0%91%D0%BE%D0%B2%D1%83%D0%B0%D1%80",
            "*": "Симона де Бовуар"
        },
        {
            "lang": "ur",
            "url": "https://ur.wikipedia.org/wiki/%D8%B3%DB%8C%D9%85%D9%88%D9%86_%D8%AF%DB%8C_%D8%A8%D9%88%D9%88%D8%A7%D8%B1",
            "*": "سیمون دی بووار"
        },
        {
            "lang": "uz",
            "url": "https://uz.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "vi",
            "url": "https://vi.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "vo",
            "url": "https://vo.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "war",
            "url": "https://war.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "wuu",
            "url": "https://wuu.wikipedia.org/wiki/%E8%A5%BF%E8%92%99%C2%B7%E6%B3%A2%E5%A8%83",
            "*": "西蒙·波娃"
        },
        {
            "lang": "xmf",
            "url": "https://xmf.wikipedia.org/wiki/%E1%83%A1%E1%83%98%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%90_%E1%83%93%E1%83%94_%E1%83%91%E1%83%9D%E1%83%95%E1%83%A3%E1%83%90%E1%83%A0%E1%83%98",
            "*": "სიმონა დე ბოვუარი"
        },
        {
            "lang": "yi",
            "url": "https://yi.wikipedia.org/wiki/%D7%A1%D7%99%D7%9E%D7%90%D7%9F_%D7%93%D7%A2_%D7%91%D7%90%D7%95%D7%95%D7%90%D7%A8",
            "*": "סימאן דע באוואר"
        },
        {
            "lang": "zh",
            "url": "https://zh.wikipedia.org/wiki/%E8%A5%BF%E8%92%99%C2%B7%E5%BE%B7%C2%B7%E6%B3%A2%E5%A8%83",
            "*": "西蒙·德·波娃"
        },
        {
            "lang": "zh-min-nan",
            "url": "https://zh-min-nan.wikipedia.org/wiki/Simone_de_Beauvoir",
            "*": "Simone de Beauvoir"
        },
        {
            "lang": "zh-yue",
            "url": "https://zh-yue.wikipedia.org/wiki/%E6%B3%A2%E4%BC%8F%E5%A8%83",
            "*": "波伏娃"
        }
    ],
    "image": {
        "name": "Simone_de_Beauvoir2.png",
        "thumbnail": {
            "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Simone_de_Beauvoir2.png/36px-Simone_de_Beauvoir2.png",
            "width": 36,
            "height": 50
        }
    },
    "links": [
        "20th-century philosophy",
        "6th arrondissement of Paris",
        "A. L. Kennedy",
        "A Vindication of the Rights of Woman",
        "Abandonment (existentialism)",
        "Abdel Rahman Badawi",
        "Absurdism",
        "Accursius",
        "Achille Mbembe",
        "Adam Smith",
        "Adrien Bertrand",
        "Adrienne Rich",
        "Agrégation",
        "Al-Farabi",
        "Al-Ghazali",
        "Alain Badiou",
        "Alain de Benoist",
        "Albert Camus",
        "Albert Schweitzer",
        "Alberto Giacometti",
        "Aleksandar Tišma",
        "Alexandre Kojève",
        "Alexandre Koyré",
        "Alexis Jenni",
        "Alexis de Tocqueville",
        "Alfred A. Knopf",
        "Algernon Sidney",
        "Ali Shariati",
        "Alice Crary",
        "Alison Jaggar",
        "All Men Are Mortal",
        "Alphonse de Châteaubriant",
        "Alterity",
        "Alvar Aalto",
        "American English",
        "Amin Maalouf",
        "Analytical feminism",
        "Anarchism",
        "Andrea Dworkin",
        "Andreï Makine",
        "Andrzej Stasiuk",
        "Andrzej Szczypiorski",
        "André Malraux",
        "André Pieyre de Mandiargues",
        "André Savignon",
        "André Schwarz-Bart",
        "Angela Davis",
        "Angst",
        "Ann Cudd",
        "Ann Oakley",
        "Anna Langfus",
        "Annette Baier",
        "Antonine Maillet",
        "Antonio Gramsci",
        "Antonio Negri",
        "Antonio Núñez Jiménez",
        "Antonio Tabucchi",
        "António Lobo Antunes",
        "Aous Shakra",
        "Apollonian and Dionysian",
        "Aristotle",
        "Arlette Elkaïm-Sartre",
        "Armand Lanoux",
        "Arne Næss",
        "Arnold Gehlen",
        "Art Shay",
        "Arthur Koestler",
        "Arthur Schopenhauer",
        "Asian feminist theology",
        "Atheism",
        "Atheistic existentialism",
        "Atiq Rahimi",
        "Auberon Herbert",
        "Aubrey–Maturin series",
        "August Bebel",
        "Auguste Comte",
        "Augustine of Hippo",
        "Augustinus Triumphus",
        "Austrian State Prize for European Literature",
        "Authenticity (philosophy)",
        "Authoritarianism",
        "Autobiographies",
        "Avempace",
        "Averroes",
        "Ayn Rand",
        "B. F. Skinner",
        "B. R. Ambedkar",
        "BBC Radio 4",
        "Bachelor of Arts",
        "Bad faith (existentialism)",
        "Baldus de Ubaldis",
        "Bartholomew of Lucca",
        "Bartolus de Saxoferrato",
        "Baruch Spinoza",
        "Beauvoir (disambiguation)",
        "Beijing",
        "Being and Nothingness",
        "Being in itself",
        "Bell hooks",
        "Benedetto Croce"
    ]
}
]
//
// wiki()
// 	.page('Simone de Beauvoir')
// 	.then(page =>
// 		page
// 			.chain()
// .categories()
// .content()
// .extlinks()
// .geosearch() //coordinates needed
// .langlinks()
// .links()
// .image()
// .summary()
//   )
//   .then(console.log)


wiki()
	.page('simone de Beauvoir')
	.then(page =>
		page
			.chain()
			.summary()
      .content()
      .categories()
      .extlinks()
      .langlinks()
			.image()
			.links()
			.request()
	)
  .then(console.log)





//
//   useEffect(()=>{
//     parseAuthor(author);
//     for(let author of author){fetchAuthorWikiData(author)}
// }, [author])


  return (
    <div>{authorWikiData && authorWikiData}</div>
  )
}

export default WikiTest
