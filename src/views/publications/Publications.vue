<template>
  <v-main class="grey lighten-3 pt-5">
    <div id="start"  class="ma-0 ma-md-16">
      <div
        style="width: 100%; max-height: 350px; overflow: hidden"
        class="rounded-lg elevation-6"
      >
        <v-img
          :min-height="minHeight"
          class="white--text"
          gradient="45deg, rgb(0 0 0 / 19%), rgb(176 31 36 / 23%)"
        >
          <v-row>
            <v-col>
              <v-container
                class="px-3 py-12 pl-lg-8 pl-md-8 pt-xl-9"
                style="padding-right: 59px; margin-left: 0"
              >
                <v-responsive
                  class="d-flex"
                  height="100%"
                  max-width="700"
                  width="100%"
                >
                  <div
                    class="rounded-lg pa-4"
                    style="background-color: #0000006e"
                  >
                    <base-heading
                      class="text-h6 text-md-h4"
                      size="text-h2"
                      title="Learn More About Recent Publications"
                      weight="medium"
                    />
                  </div>
                </v-responsive>
              </v-container>
            </v-col>
            <v-col class="hidden-md-and-down">
              <div style="max-width: 57vh; float: right" class="pr-15 py-5">
                <v-icon size="240"> mdi-book-search-outline </v-icon>
              </div>
            </v-col>
          </v-row>
        </v-img>
      </div>
      <v-card class="pa-5 mt-5 hidden-md-and-up" light>
        <div class="hidden-md-and-up justify-end">
          <v-row class="justify-end" @click="drawer = !drawer">
            <div class="pr-2 text-button text-md-h6">Filter Options</div>

            <v-icon>mdi-filter-variant </v-icon>
          </v-row>
        </div>
      </v-card>
      <v-navigation-drawer
        width="320px"
        v-model="drawer"
        fixed
        left
        temporary
        id="myDiv"
      >
        <div class="ma-4">
          Pick Dates
          <date-range
            :key="`i-${dates}`"
            :dates="dates"
            @onChange="
              (newData) => {
                dates = newData;
              }
            "
          />
        </div>
        <v-row class="justify-end mb-2 mr-2">
          <v-btn class="primary" @click="onSubmit"> Apply </v-btn>
        </v-row>
      </v-navigation-drawer>
      <v-row class="my-8">
       

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <v-row>
              <v-col v-for="i in itemsPerPage" :key="i" cols="12">
                <v-card
                  class="mx-4 mx-auto "
                  flat
                  width="80%"
                  v-if="features[startIndex + i]"
                >
                  <v-card-title class="text-lg-h4">{{
                    features[startIndex + i].title
                  }}</v-card-title>
                  <v-card-text class="text-lg-h5">
                    {{ features[startIndex + i].paperintro }}
                  </v-card-text>
                  <v-card-text class="my-0 py-0">
                    <!-- <v-icon> mdi-clock</v-icon> 1/2/21 -->
                  </v-card-text>
                  <v-card-actions class="justify-end mb-4">
                    <v-btn>
                      <a :href="features[startIndex + i].url" target="_blank"
                        >Read-more</a
                      >
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <div v-if="itemsPerPage != i && features[startIndex + i + 1]">
                  <v-divider></v-divider>
                </div>
              </v-col>
            </v-row>
            <div class="center pb-6">
              <v-pagination
                v-model="page"
                :length="numOfPages"
                circle
                @input="OnInput"
              ></v-pagination>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </v-main>
</template>

<script>
import DateRange from "../../components/DateRange.vue";

export default {
  components: {
    DateRange,
  },

  data: () => ({
    options: {
      duration: 300,
      easing: "easeInCubic",
      offset: 111,
    },
    drawer: null,
    page: 1,
    itemsPerPage: 8,
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    dates: ["2019-09-10", "2021-09-20"],
    features: [
  
  

      {
        title: "Alzheimer's disease drug development pipeline: 2021",

        url: "https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/trc2.12179",
        paperintro:
          "Alzheimer's disease (AD) is the sixth leading cause of death in the United States and the fifth leading cause among those over age 65 ... ",
      },

   
          {
        title:
          "Artificial intelligence framework identifies candidate targets for drug repurposing in Alzheimer’s disease",

        url: "https://link.springer.com/article/10.1186/s13195-021-00951-z",
        paperintro:
          "Fang J, Zhang P, Wang Q, Chiang C, i Zhou Y, Hou Y, Xu J, Chen R, Zhang B, Lewis S, Leverenz J, Pieper A, Li B, Li L, Cummings J, Cheng F. Artifcial intelligence framework identifes candidate targets for drug repurposing in Alzheimer’s disease. Alzheimer's Research & Therapy. Forthcoming. doi: doi.org/10.1186/s13195-021-00951-z.",
      },

      
          {
        title:
          "Dual Task Performance Is Associated with Amyloidosis in Cognitively Healthy Adults",

        url: "https://link.springer.com/article/10.14283/jpad.2022.1",
        paperintro:
         "Longhurst JK, Cummings JL, John SE, Poston B, Rider JV, Salazar AM, Mishra VR, Ritter A, Caldwell JZ, Miller JB, Kinney JW, Landers MR. Dual Task Performance Is Associated with Amyloidosis in Cognitively Healthy Adults. J Prev Alz Dis. 2022 January. doi: http://dx.doi.org/10.14283/jpad.2022.1.",
      },
                 {
        title:
          "Neuropsychiatric Symptoms in Dementia: Considering a Clinical Role for Electroencephalography",

        url: "https://neuro.psychiatryonline.org/doi/10.1176/appi.neuropsych.21050135",
        paperintro:
        "Holmgren S, Andersson T, Berglund A, Aarsland D, Cummings J, Freund-Levi Y. Neuropsychiatric Symptoms in Dementia: Considering a Clinical Role for Electroencephalography. J Neuropsychiatry Clin Neurosci. 2022 Mar 21;:appineuropsych21050135. doi: 10.1176/appi.neuropsych.21050135. [Epub ahead of print] PubMed PMID: 35306829; NIHMSID:NIHMS1791776.",
      },
           {
        title: "Public Policy Should Foster Alzheimer’s Treatment Availability: Comment on the Draft US Medicare Decision to Limit Payment for Aducanumab (Aduhelm™) to Patients Participating in Clinical Trials",
        url: "https://link.springer.com/article/10.14283/jpad.2022.25",
        paperintro:
          "Cummings J. Public Policy Should Foster Alzheimer’s Treatment Availability: Comment on the Draft US Medicare Decision to Limit Payment for Aducanumab (AduhelmTM) to Patients Participating in Clinical Trials. J Prev Alz Dis 2022; http://dx.doi.org/10.14283/jpad.2022.25",
      },

      {
        title: "Relationship of sex differences in cortical thickness and memory among cognitively healthy subjects and individuals with mild cognitive impairment and Alzheimer disease",
        url: "https://alzres.biomedcentral.com/articles/10.1186/s13195-022-00973-1",
        paperintro: "Cieri F, Zhuang X, Cordes D, Kaplan N, Cummings J, Caldwell J. Relationship of sex differences in cortical thickness and memory among cognitively healthy subjects and individuals with mild cognitive impairment and Alzheimer disease. Alzheimer's Research & Therapy. Forthcoming. doi: https://doi.org/10.1186/s13195-022-00973-1.",
      },
              {
        title: "Aducanumab, Amyloid Lowering, and Slowing of Alzheimer Disease",
        url: "https://pubmed.ncbi.nlm.nih.gov/34233942/",
        paperintro:
          "Salloway S, Cummings J. Aducanumab, amyloid lowering, and slowing of Alzheimer disease. Neurology 2021;97:543-544;doi:10.1212/WNL.0000000000012451",
      },
              {
        title: "Aducanumab: Appropriate Use Recommendations ",
        url: "https://pubmed.ncbi.nlm.nih.gov/34585212/",
        paperintro:
          "Cummings J, Salloway S. Aducanumab: Appropriate use recommendations. Alzheimers Dement. 2022 Mar;18(3):531-533. doi: 10.1002/alz.12444. Epub 2021 Jul 27. PubMed PMID: 34314093; PubMed Central PMCID: PMC8792094",
      },
                {
        title: "Aducanumab: Appropriate Use Recommendations ",
        url: "https://pubmed.ncbi.nlm.nih.gov/34585212/",
        paperintro:
          "Cummings J, Aisen P, Apostolova LG, Atri A, Salloway S, Weiner M. Aducanumab: Appropriate Use Recommendations. J Prev Alzheimers Dis. 2021;8(4):398-410. doi: 10.14283/jpad.2021.41. PubMed PMID: 34585212; PubMed Central PMCID: PMC8835345.",
      },
                       {
        title: "Aducanumab produced a clinically meaningful benefit in association with amyloid lowering",
        url: "https://pubmed.ncbi.nlm.nih.gov/33971962/",
        paperintro:
          "Cummings J, Aisen P, Lemere C, Atri A, Sabbagh M, Salloway S. Aducanumab produced a clinically meaningful benefit in association with amyloid lowering. Alzheimer’s Research & Therapy 2021;13:98-100",
      },
     

            {
        title: "AlzGPS: a genome-wide positioning systems platform to catalyze multi-omics for Alzheimer’s drug discovery",
        url: "https://alzres.biomedcentral.com/articles/10.1186/s13195-020-00760-w",
        paperintro: "Zhou Y, Fang J, Bekris LM, Kim YH, Pieper AA, Leverenz JB, Cummings J, Cheng F. AlzGPS: a genome-wide positioning systems platform to catalyze multi-omics for Alzheimer's drug discovery. Alzheimers Res Ther. 2021 Jan 13;13(1):24. doi: 10.1186/s13195-020-00760-w. PubMed PMID: 33441136; PubMed Central PMCID: PMC7804907",
      },
            {
        title: "Alzheimer's disease",
        url: "https://pubmed.ncbi.nlm.nih.gov/33667416/",
        paperintro: "Scheltens P, De Strooper B, Kivipelto M, Holstege H, Chételat G, Teunissen CE, Cummings J, van der Flier WM. Alzheimer's disease. Lancet. 2021 Apr 24;397(10284):1577-1590. doi: 10.1016/S0140-6736(20)32205-4. Epub 2021 Mar 2. Review. PubMed PMID: 33667416; PubMed Central PMCID: PMC8354300.",
      },
             {
        title:
          "Alzheimer’s disease drug development pipeline: 2021",

        url: "https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/trc2.12179",
        paperintro:
          "Cummings J, Lee G, Zhong K, Fonseda J, Taghva K. Alzheimer’s disease drug development pipeline: 2021. Alzheimer’s Dement 2021;7:e12179; doi/10.1002/trc2.12179",
      },
                     {
        title: "A randomized, double-blind, phase 2b proof-of-concept clinical trial in early Alzheimer’s disease with lecanemab, an anti-Aβ protofibril antibody",
        url: "https://alzres.biomedcentral.com/articles/10.1186/s13195-021-00813-8",
        paperintro:
          "Swanson CJ, Zhang Y, Dhadda S, Wang J, Kaplow J, Lai RYK, Lannfelt L, Bradley H, Rabe M, Koyama A, Reyderman L, Berry DA, Berry S, Bordon R, Kramer LD, Cummings JL. A randomized, double-blind, phase 2b proof-of-concept clinical trial in early Alzheimer’s disease with lecanemab, an anti-Aβ protofibril antibody. Alzheimer’s Research & Therapy 2021;13:80-93",
      },

             {
        title: "Assessing Clinical Change in Individuals Exposed to Repetitive Head Impacts: The Repetitive Head Impact Composite Index",
        url: "https://www.frontiersin.org/articles/10.3389/fneur.2021.605318/full",
        paperintro: "Bernick C, Shan G, Bennett L, Alberts J, Cummings J. Assessing Clinical Change in Individuals Exposed to Repetitive Head Impacts: The Repetitive Head Impact Composite Index. Front Neurol. 2021;12:605318. doi: 10.3389/fneur.2021.605318. eCollection 2021. PubMed PMID: 34295295; PubMed Central PMCID: PMC8290321.",
      },
               {
        title: "Brain Health Executives: A Transdisciplinary Workforce Innovation-A Commentary",
        url: "https://pubmed.ncbi.nlm.nih.gov/34980980/",
        paperintro:
          "Eyre H, Berk M, Smith E, Cummings J, Heinemeyer M. Brain health executives: a transdisciplinary workforce innovation – a commentary. Innovations in Clin Neuro 2021;18(4-6)45-48",
      },

       {
        title: "Building brain capital",
        url: "https://ohsu.pure.elsevier.com/en/publications/building-brain-capital",
        paperintro: "Eyre HA, Ayadi R, Ellsworth W, Aragam G, Smith E, Dawson WD, Ibanez A, Altimus C, Berk M, Manji HK, Storch EA, Leboyer M, Kawaguchi N, Freeman M, Brannelly P, Manes F, Chapman SB, Cummings J, Graham C, Miller BF, Sarnyai Z, Meyer R, Hynes W. Building brain capital. Neuron. 2021 May 5;109(9):1430-1432. doi: 10.1016/j.neuron.2021.04.007. PubMed PMID: 33957073; PubMed Central PMCID: PMC8240507.",
      },

        {
        title: "Cognitive Effects of the BET Protein Inhibitor Apabetalone: A Prespecified Montreal Cognitive Assessment Analysis Nested in the BETonMACE Randomized Controlled Trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/34459400/",
        paperintro:
          "Cummings J, Schwartz GG, Nicholls SJ, Khan A, Halliday C, Toth PP, Sweeney M, Johansson JO, Wong NCW, Kulikowski E, Kalantar-Zadeh K, Lebioda K, Ginsberg HN, Winblad B, Zetterberg H, Ray KK. Cognitive effects of the BET protein inhibitor apabetalone: a prespecified Montreal Cognitive Assessment analysis nested in the BETonMACE randomized controlled trial. J Alzheimer Dis 2021;83:1703-1715",
      },

       {
        title: "Developing methods to detect and diagnose chronic traumatic encephalopathy during life: rationale, design, and methodology for the DIAGNOSE CTE Research Project",
        url: "https://pubmed.ncbi.nlm.nih.gov/34384490/",
        paperintro: "Alosco ML, Mariani ML, Adler CH, Balcer LJ, Bernick C, Au R, Banks SJ, Barr WB, Bouix S, Cantu RC, Coleman MJ, Dodick DW, Farrer LA, Geda YE, Katz DI, Koerte IK, Kowall NW, Lin AP, Marcus DS, Marek KL, McClean MD, McKee AC, Mez J, Palmisano JN, Peskind ER, Tripodis Y, Turner RW 2nd, Wethe JV, Cummings JL, Reiman EM, Shenton ME, Stern RA. Developing methods to detect and diagnose chronic traumatic encephalopathy during life: rationale, design, and methodology for the DIAGNOSE CTE Research Project. Alzheimers Res Ther. 2021 Aug 12;13(1):136. doi: 10.1186/s13195-021-00872-x. PubMed PMID: 34384490; PubMed Central PMCID: PMC8357968.",
      },
        {
        title: "Development and assessment of a brief screening tool for psychosis in dementia",
        url: "https://pubmed.ncbi.nlm.nih.gov/34934801/",
        paperintro:
          "Cummings JL, Ismail Z, Dickerson BC, Ballard C, Grossberg G, McEvoy B, Foff E, Atri A. Development and assessment of a brief screening tool for psychosis in dementia. Alzheimer’s Dement. 2021;13:e12254; doi: 10.1002/dad2.12254",
      },
             {
        title: "Diagnostic criteria for apathy in neurocognitive disorders",
        url: "https://pubmed.ncbi.nlm.nih.gov/33949763/",
        paperintro: "Miller DS, Robert P, Ereshefsky L, Adler L, Bateman D, Cummings J, DeKosky ST, Fischer CE, Husain M, Ismail Z, Jaeger J, Lerner AJ, Li A, Lyketsos CG, Manera V, Mintzer J, Moebius HJ, Mortby M, Meulien D, Pollentier S, Porsteinsson A, Rasmussen J, Rosenberg PB, Ruthirakuhan MT, Sano M, Zucchero Sarracini C, Lanctôt KL. Diagnostic criteria for apathy in neurocognitive disorders. Alzheimers Dement. 2021 Dec;17(12):1892-1904. doi: 10.1002/alz.12358. Epub 2021 May 5. PubMed PMID: 33949763; PubMed Central PMCID: PMC8835377.",
      },
       {
        title: "Disease modification is not all — we need symptomatic therapies for Alzheimer disease",
        url: "https://www.nature.com/articles/s41582-021-00591-9",
        paperintro:
          "Cummings J. Disease modification is not all — we need symptomatic therapies for Alzheimer disease. Nat Rev Neurol. 2022; doi: 10.1038/s41582-021-00591-9",
      },
         {
        title: "Endophenotype-based in silico network medicine discovery combined with insurance record data mining identifies sildenafil as a candidate drug for Alzheimer’s disease",
        url: "https://www.nature.com/articles/s43587-021-00138-z",
        paperintro:
          "Fang J, Zhang P, Zhou Y, Chiang CW, Tan J, Hou Y, Stauffer S, Li L, Pieper AA, Cummings J, Cheng F. Endophenotype-based in silico network medicine discovery combined with insurance record data mining identifies sildenafil as a candidate drug for Alzheimer’s disease. Nature Aging 2021; online ahead of print;https://doi.org/10.1038/s43587-021-00138-z",
      },

       {
        title: "Estimating progression rates across the spectrum of Alzheimer’s disease for amyloid-positive individuals using National Alzheimer’s Coordinating Center data",
        url: "https://pubmed.ncbi.nlm.nih.gov/34431074/",
        paperintro:
          "Potashman M, Buessing M, Benea ML, Cummings J, Borson S, Pemberton-Ross P, Epstein AJ. Estimating progression rates across the spectrum of Alzheimer’s disease for amyloid-positive individuals using National Alzheimer’s Coordinating Center data. Neurol Ther 2021; online ahead of print; doi.org/10.1007/s40120-021-00272-1",
      },
                   {
        title: "Intepirdine as adjunctive therapy to donepezil for mild-to-moderate Alzheimer's disease: A randomized, placebo-controlled, phase 3 clinical trial (MINDSET)",
        url: "https://pubmed.ncbi.nlm.nih.gov/34095437/",
        paperintro:
          "Lang FM, Mo Y, Sabbagh M, Solomon P, Boada M, Jones RW, Frisoni GB, Grimmer T, Dubois B, Harnett M, Friedhoff SR, Coslett S, Cummings JL. Intepirdine as adjunctive therapy to donepezil for mild-to-moderate Alzheimer’s disease: a randomized, placebo-controlled, phase 3 clinical trial (MINDSET). Alzheimer’s Dement 2021;7:e12136",
      },

       {
        title: "International Psychogeriatric Association (IPA) consensus for defining psychosis in major and mild neurocognitive disorders",
        url: "https://www.cambridge.org/core/journals/international-psychogeriatrics/article/international-psychogeriatric-association-ipa-consensus-for-defining-psychosis-in-major-and-mild-neurocognitive-disorders/4F39C2718F4DBF53807C088E4A55F0DB",
        paperintro: "Sano M, Cummings J, Jeste DV, Finkel S, Reichman W. International Psychogeriatric Association (IPA) consensus for defining psychosis in major and mild neurocognitive disorders. Int Psychogeriatr. 2021 Apr 7;:1-5. doi: 10.1017/S1041610221000260. [Epub ahead of print] PubMed PMID: 33823951; PubMed Central PMCID: PMC8494840.",
      },

       {
        title: "National Institute of Neurological Disorders and Stroke Consensus Diagnostic Criteria for Traumatic Encephalopathy Syndrome",
        url: "https://pubmed.ncbi.nlm.nih.gov/33722990/",
        paperintro: "Katz DI, Bernick C, Dodick DW, Mez J, Mariani ML, Adler CH, Alosco ML, Balcer LJ, Banks SJ, Barr WB, Brody DL, Cantu RC, Dams-O'Connor K, Geda YE, Jordan BD, McAllister TW, Peskind ER, Petersen RC, Wethe JV, Zafonte RD, Foley ÉM, Babcock DJ, Koroshetz WJ, Tripodis Y, McKee AC, Shenton ME, Cummings JL, Reiman EM, Stern RA. National Institute of Neurological Disorders and Stroke Consensus Diagnostic Criteria for Traumatic Encephalopathy Syndrome. Neurology. 2021 May 4;96(18):848-863. doi: 10.1212/WNL.0000000000011850. Epub 2021 Mar 15. Review. PubMed PMID: 33722990; PubMed Central PMCID: PMC8166432.",
      },

       {
        title: "New approaches to symptomatic treatments for Alzheimer's disease ",
        url: "https://pubmed.ncbi.nlm.nih.gov/33441154/",
        paperintro: "Cummings J. New approaches to symptomatic treatments for Alzheimer's disease. Mol Neurodegener. 2021 Jan 13;16(1):2. doi: 10.1186/s13024-021-00424-9. Review. PubMed PMID: 33441154; PubMed Central PMCID: PMC7805095.",
      },
      
       {
        title: "Rasagiline effects on glucose metabolism, cognition, and tau in Alzheimer's dementia",
        url: "https://pubmed.ncbi.nlm.nih.gov/33614888/",
        paperintro: "Matthews DC, Ritter A, Thomas RG, Andrews RD, Lukic AS, Revta C, Kinney JW, Tousi B, Leverenz JB, Fillit H, Zhong K, Feldman HH, Cummings J. Rasagiline effects on glucose metabolism, cognition, and tau in Alzheimer's dementia. Alzheimers Dement (N Y). 2021;7(1):e12106. doi: 10.1002/trc2.12106. eCollection 2021. PubMed PMID: 33614888; PubMed Central PMCID: PMC7882538.",
      },
      
       {
        title: "Safety and Tolerability of GRF6019 Infusions in Severe Alzheimer's Disease: A Phase II Double-Blind Placebo-Controlled Trial.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33967047/",
        paperintro: "Hannestad J, Duclos T, Chao W, Koborsi K, Klutzaritz V, Beck B, Patel AK, Scott J, Thein SG, Cummings JL, Kay G, Braithwaite S, Nikolich K. Safety and Tolerability of GRF6019 Infusions in Severe Alzheimer's Disease: A Phase II Double-Blind Placebo-Controlled Trial. J Alzheimers Dis. 2021;81(4):1649-1662. doi: 10.3233/JAD-210011. PubMed PMID: 33967047.",
      },
   {
        title: "Sex Differences of Brain Functional Topography Revealed in Normal Aging and Alzheimer's Disease Cohort",
        url: "https://pubmed.ncbi.nlm.nih.gov/33612547/",
        paperintro: "Cieri F, Yang Z, Cordes D, Caldwell JZK. Sex Differences of Brain Functional Topography Revealed in Normal Aging and Alzheimer's Disease Cohort. J Alzheimers Dis. 2021;80(3):979-984. doi: 10.3233/JAD-201596. PubMed PMID: 33612547; PubMed Central PMCID: PMC8793667.",
      },

   {
        title: "State-of-the-art of lumbar puncture and its place in the journey of patients with Alzheimer's disease",
        url: "https://pubmed.ncbi.nlm.nih.gov/34043269/",
        paperintro: "Hampel H, Shaw LM, Aisen P, Chen C, Lleó A, Iwatsubo T, Iwata A, Yamada M, Ikeuchi T, Jia J, Wang H, Teunissen CE, Peskind E, Blennow K, Cummings J, Vergallo A. State-of-the-art of lumbar puncture and its place in the journey of patients with Alzheimer's disease. Alzheimers Dement. 2022 Jan;18(1):159-177. doi: 10.1002/alz.12372. Epub 2021 May 27. Review. PubMed PMID: 34043269; PubMed Central PMCID: PMC8626532.",
      },

   {
        title: "The Amyloid-β Pathway in Alzheimer’s Disease",
        url: "https://www.nature.com/articles/s41380-021-01249-0",
        paperintro: "Hampel H, Hardy J, Blennow K, Chen C, Perry G, Kim SH, Villemagne VL, Aisen P, Vendruscolo M, Iwatsubo T, Masters CL, Cho M, Lannfelt L, Cummings JL, Vergallo A. The Amyloid-β Pathway in Alzheimer's Disease. Mol Psychiatry. 2021 Oct;26(10):5481-5503. doi: 10.1038/s41380-021-01249-0. Epub 2021 Aug 30. Review. PubMed PMID: 34456336; PubMed Central PMCID: PMC8758495.",
      },

   {
        title: "The costs of developing treatments for Alzheimer's disease: A retrospective exploration",
        url: "https://pubmed.ncbi.nlm.nih.gov/34581499/",
        paperintro: "Cummings JL, Goldman DP, Simmons-Stern NR, Ponton E. The costs of developing treatments for Alzheimer's disease: A retrospective exploration. Alzheimers Dement. 2022 Mar;18(3):469-477. doi: 10.1002/alz.12450. Epub 2021 Sep 28. PubMed PMID: 34581499; PubMed Central PMCID: PMC8940715.",
      },
         {
        title: "The probabilistic model of Alzheimer disease: the amyloid hypothesis revised",
        url: "https://www.nature.com/articles/s41583-021-00533-w",
        paperintro: "Frisoni GB, Altomare D, Thal DR, Ribaldi F, van der Kant R, Ossenkoppele R, Blennow K, Cummings J, van Duijn C, Nilsson PM, Dietrich PY, Scheltens P, Dubois B. The probabilistic model of Alzheimer disease: the amyloid hypothesis revised. Nat Rev Neurosci. 2022 Jan;23(1):53-66. doi: 10.1038/s41583-021-00533-w. Epub 2021 Nov 23. Review. PubMed PMID: 34815562; PubMed Central PMCID: PMC8840505.",
      },

   {
        title: "Value-Generating Exploratory Trials in Neurodegenerative Dementias",
        url: "https://n.neurology.org/content/96/20/944.abstract",
        paperintro: "Friedman LG, McKeehan N, Hara Y, Cummings JL, Matthews DC, Zhu J, Mohs RC, Wang D, Hendrix SB, Quintana M, Schneider LS, Grundman M, Dickson SP, Feldman HH, Jaeger J, Finger EC, Ryan JM, Niehoff D, Dickinson SL, Markowitz JT, Owen M, Travaglia A, Fillit HM. Value-Generating Exploratory Trials in Neurodegenerative Dementias. Neurology. 2021 May 18;96(20):944-954. doi: 10.1212/WNL.0000000000011774. Epub 2021 Mar 5. Review. PubMed PMID: 33674360; PubMed Central PMCID: PMC8205472.",
      },
                {
        title: "Who funds Alzheimer's disease drug development?",
        url: "https://alz-journals.onlinelibrary.wiley.com/doi/full/10.1002/trc2.12185?af=R",
        paperintro:
          "Cummings J, Bauzon, J, Lee G. Who funds Alzheimer’s disease drug development? Alzheimer’s Dement 2021;7:e12185; doi:10.1002/trc2.12185",
      },
           {
        title: "Why aducanumab is important",
        url: "https://www.nature.com/articles/s41591-021-01478-4",
        paperintro:
          "Cummings J. Why aducanumab is important. Nature Med 2021;27:1498",
      },
     

   {
        title: "A Brain Capital Grand Strategy: toward economic reimagination",
        url: "https://www.nature.com/articles/s41380-020-00918-w",
        paperintro: "Smith E, Ali D, Wilkerson B, Dawson WD, Sobowale K, Reynolds C 3rd, Berk M, Lavretsky H, Jeste D, Ng CH, Soares JC, Aragam G, Wainer Z, Manji HK, Licinio J, Lo AW, Storch E, Fu E, Leboyer M, Tarnanas I, Ibanez A, Manes F, Caddick S, Fillit H, Abbott R, Robertson IH, Chapman SB, Au R, Altimus CM, Hynes W, Brannelly P, Cummings J, Eyre HA. A Brain Capital Grand Strategy: toward economic reimagination. Mol Psychiatry. 2021 Jan;26(1):3-22. doi: 10.1038/s41380-020-00918-w. Epub 2020 Oct 26. PubMed PMID: 33100330; PubMed Central PMCID: PMC8244537.",
      },
   {
        title: "A Conformation Variant of p53 Combined with Machine Learning Identifies Alzheimer Disease in Preclinical and Prodromal Stages",
        url: "https://pubmed.ncbi.nlm.nih.gov/33375220/",
        paperintro: "Abate G, Vezzoli M, Polito L, Guaita A, Albani D, Marizzoni M, Garrafa E, Marengoni A, Forloni G, Frisoni GB, Cummings JL, Memo M, Uberti D. A Conformation Variant of p53 Combined with Machine Learning Identifies Alzheimer Disease in Preclinical and Prodromal Stages. J Pers Med. 2020 Dec 26;11(1). doi: 10.3390/jpm11010014. PubMed PMID: 33375220; PubMed Central PMCID: PMC7823360.",
      },

   {
        title: "BACE inhibition causes rapid, regional, and non-progressive volume reduction in Alzheimer's disease brain",
        url: "https://pubmed.ncbi.nlm.nih.gov/33253354/",
        paperintro: "Sur C, Kost J, Scott D, Adamczuk K, Fox NC, Cummings JL, Tariot PN, Aisen PS, Vellas B, Voss T, Mahoney E, Mukai Y, Kennedy ME, Lines C, Michelson D, Egan MF. BACE inhibition causes rapid, regional, and non-progressive volume reduction in Alzheimer's disease brain. Brain. 2020 Dec 1;143(12):3816-3826. doi: 10.1093/brain/awaa332. PubMed PMID: 33253354; PubMed Central PMCID: PMC8453290.",
      },

   {
        title: "Brain health INnovation Diplomacy: a model binding diverse disciplines to manage the promise and perils of technological innovation",
        url: "https://pubmed.ncbi.nlm.nih.gov/32019621/",
        paperintro: "Ternes K, Iyengar V, Lavretsky H, Dawson WD, Booi L, Ibanez A, Vahia I, Reynolds C, DeKosky S, Cummings J, Miller B, Perissinotto C, Kaye J, Eyre HA. Brain health INnovation Diplomacy: a model binding diverse disciplines to manage the promise and perils of technological innovation. Int Psychogeriatr. 2020 Aug;32(8):955-979. doi: 10.1017/S1041610219002266. Epub 2020 Feb 13. Review. PubMed PMID: 32019621; PubMed Central PMCID: PMC7423685.",
      },

   {
        title: "Brain Health Living Labs",
        url: "https://pubmed.ncbi.nlm.nih.gov/33342676/",
        paperintro: "Richardson S, Sinha A, Vahia I, Dawson W, Kaye J, Reynolds CF 3rd, Smith E, Cummings J, Berk M, Lavretsky H, Eyre HA. Brain Health Living Labs. Am J Geriatr Psychiatry. 2021 Jul;29(7):698-703. doi: 10.1016/j.jagp.2020.11.010. Epub 2020 Dec 1. PubMed PMID: 33342676.",
      },
   {
        title: "Cognitive outcomes in trials of two BACE inhibitors in Alzheimer's disease",
        url: "https://alz-journals.onlinelibrary.wiley.com/doi/full/10.1002/alz.12164",
        paperintro: "Wessels AM, Lines C, Stern RA, Kost J, Voss T, Mozley LH, Furtek C, Mukai Y, Aisen PS, Cummings JL, Tariot PN, Vellas B, Dupre N, Randolph C, Michelson D, Andersen SW, Shering C, Sims JR, Egan MF. Cognitive outcomes in trials of two BACE inhibitors in Alzheimer's disease. Alzheimers Dement. 2020 Nov;16(11):1483-1492. doi: 10.1002/alz.12164. Epub 2020 Oct 13. PubMed PMID: 33049114.",
      },

   {
        title: "Dementia-related psychosis and the potential role for pimavanserin",
        url: "https://pubmed.ncbi.nlm.nih.gov/32811586/",
        paperintro: "Cummings JL, Devanand DP, Stahl SM. Dementia-related psychosis and the potential role for pimavanserin. CNS Spectr. 2022 Feb;27(1):7-15. doi: 10.1017/S1092852920001765. Epub 2020 Aug 19. Review. PubMed PMID: 32811586; PubMed Central PMCID: PMC8318559.",
      },

   {
        title: "Drug Development for Psychotropic, Cognitive-Enhancing, and Disease-Modifying Treatments for Alzheimer's Disease",
        url: "https://pubmed.ncbi.nlm.nih.gov/33108950/",
        paperintro: "Cummings J. Drug Development for Psychotropic, Cognitive-Enhancing, and Disease-Modifying Treatments for Alzheimer's Disease. J Neuropsychiatry Clin Neurosci. 2021 Winter;33(1):3-13. doi: 10.1176/appi.neuropsych.20060152. Epub 2020 Oct 28. PubMed PMID: 33108950; PubMed Central PMCID: PMC7989572.",
      },
   {
        title: "FLAME: A computerized neuropsychological composite for trials in early dementia",
        url: "https://alz-journals.onlinelibrary.wiley.com/doi/full/10.1002/dad2.12098",
        paperintro: "Brooker H, Williams G, Hampshire A, Corbett A, Aarsland D, Cummings J, Molinuevo JL, Atri A, Ismail Z, Creese B, Fladby T, Thim-Hansen C, Wesnes K, Ballard C. FLAME: A computerized neuropsychological composite for trials in early dementia. Alzheimers Dement (Amst). 2020;12(1):e12098. doi: 10.1002/dad2.12098. eCollection 2020. PubMed PMID: 33088895; PubMed Central PMCID: PMC7560493.",
      },
   {
        title: "Harnessing endophenotypes and network medicine for Alzheimer's drug repurposing",
        url: "https://pubmed.ncbi.nlm.nih.gov/32656864/",
        paperintro: "Fang J, Pieper AA, Nussinov R, Lee G, Bekris L, Leverenz JB, Cummings J, Cheng F. Harnessing endophenotypes and network medicine for Alzheimer's drug repurposing. Med Res Rev. 2020 Nov;40(6):2386-2426. doi: 10.1002/med.21709. Epub 2020 Jul 13. Review. PubMed PMID: 32656864; PubMed Central PMCID: PMC7561446.",
      },
   {
        title: "Open Peer Commentary to “Failure to demonstrate efficacy of aducanumab: An analysis of the EMERGE and ENGAGE Trials as reported by Biogen December 2019”",
        url: "https://alz-journals.onlinelibrary.wiley.com/doi/full/10.1002/alz.12235",
        paperintro: "Sabbagh MN, Cummings J. Open Peer Commentary to Failure to demonstrate efficacy of aducanumab: An analysis of the EMERGE and ENGAGE Trials as reported by Biogen December 2019. Alzheimers Dement. 2021 Apr;17(4):702-703. doi: 10.1002/alz.12235. Epub 2020 Nov 1. PubMed PMID: 33135288; PubMed Central PMCID: PMC8043968.",
      },

   {
        title: "Predicting Amyloid Burden to Accelerate Recruitment of Secondary Prevention Clinical Trials",
        url: "https://pubmed.ncbi.nlm.nih.gov/32920622/",
        paperintro: "Langford O, Raman R, Sperling RA, Cummings J, Sun CK, Jimenez-Maggiora G, Aisen PS, Donohue MC. Predicting Amyloid Burden to Accelerate Recruitment of Secondary Prevention Clinical Trials. J Prev Alzheimers Dis. 2020;7(4):213-218. doi: 10.14283/jpad.2020.44. PubMed PMID: 32920622; PubMed Central PMCID: PMC7745538.",
      },

   {
        title: "Recruitment into the Alzheimer Prevention Trials (APT) Webstudy for a Trial-Ready Cohort for Preclinical and Prodromal Alzheimer's Disease (TRC-PAD)",
        url: "https://pubmed.ncbi.nlm.nih.gov/32920623/",
        paperintro: "Walter S, Clanton TB, Langford OG, Rafii MS, Shaffer EJ, Grill JD, Jimenez-Maggiora GA, Sperling RA, Cummings JL, Aisen PS. Recruitment into the Alzheimer Prevention Trials (APT) Webstudy for a Trial-Ready Cohort for Preclinical and Prodromal Alzheimer's Disease (TRC-PAD). J Prev Alzheimers Dis. 2020;7(4):219-225. doi: 10.14283/jpad.2020.46. PubMed PMID: 32920623; PubMed Central PMCID: PMC7842199.",
      },

   {
        title: "Repurposed agents in the Alzheimer’s disease drug development pipeline",
        url: "https://alzres.biomedcentral.com/articles/10.1186/s13195-020-00662-x",
        paperintro: "Bauzon J, Lee G, Cummings J. Repurposed agents in the Alzheimer's disease drug development pipeline. Alzheimers Res Ther. 2020 Aug 17;12(1):98. doi: 10.1186/s13195-020-00662-x. PubMed PMID: 32807237; PubMed Central PMCID: PMC7433208.",
      },
  {
        title: "Safety and tolerability of GRF6019 in mild-to-moderate Alzheimer's disease dementia",
        url: "https://pubmed.ncbi.nlm.nih.gov/33344754/",
        paperintro: "Hannestad J, Koborsi K, Klutzaritz V, Chao W, Ray R, Páez A, Jackson S, Lohr S, Cummings JL, Kay G, Nikolich K, Braithwaite S. Safety and tolerability of GRF6019 in mild-to-moderate Alzheimer's disease dementia. Alzheimers Dement (N Y). 2020;6(1):e12115. doi: 10.1002/trc2.12115. eCollection 2020. PubMed PMID: 33344754; PubMed Central PMCID: PMC7744029.",
      },

   {
        title: "Spatial patterns of correlation between cortical amyloid and cortical thickness in a tertiary clinical population with memory deficit",
        url: "https://pubmed.ncbi.nlm.nih.gov/33244036/",
        paperintro: "Pillai JA, Larvie M, Chen J, Crawford A, Cummings JL, Jones SE. Spatial patterns of correlation between cortical amyloid and cortical thickness in a tertiary clinical population with memory deficit. Sci Rep. 2020 Nov 26;10(1):20717. doi: 10.1038/s41598-020-77503-2. PubMed PMID: 33244036; PubMed Central PMCID: PMC7693188.",
      },
  {
        title: "The necessity of diplomacy in brain health",
        url: "https://pubmed.ncbi.nlm.nih.gov/33212057/",
        paperintro: "Dawson WD, Bobrow K, Ibanez A, Booi L, Pintado-Caipa M, Yamamoto S, Tarnanas I, Evans T, Comas-Herrera A, Cummings J, Kaye J, Yaffe K, Miller BL, Eyre HA. The necessity of diplomacy in brain health. Lancet Neurol. 2020 Dec;19(12):972-974. doi: 10.1016/S1474-4422(20)30358-6. PubMed PMID: 33212057; PubMed Central PMCID: PMC8315828.",
      },

   {
        title: "The Neuropsychiatric Inventory: Development and Applications",
        url: "https://pubmed.ncbi.nlm.nih.gov/32013737/",
        paperintro: "Cummings J. The Neuropsychiatric Inventory: Development and Applications. J Geriatr Psychiatry Neurol. 2020 Mar;33(2):73-84. doi: 10.1177/0891988719882102. Review. PubMed PMID: 32013737; PubMed Central PMCID: PMC8505128.",
      },
      
   {
        title: "The Role of Neuropsychiatric Symptoms in Research Diagnostic Criteria for Neurodegenerative Diseases",
        url: "https://www.sciencedirect.com/science/article/pii/S106474812030419X",
        paperintro: "Cummings J. The Role of Neuropsychiatric Symptoms in Research Diagnostic Criteria for Neurodegenerative Diseases. Am J Geriatr Psychiatry. 2021 Apr;29(4):375-383. doi: 10.1016/j.jagp.2020.07.011. Epub 2020 Jul 27. Review. PubMed PMID: 32819825; PubMed Central PMCID: PMC7855689.",
      },
   {
        title: "The Trial-Ready Cohort for Preclinical and Prodromal Alzheimer's Disease (TRC-PAD): Experience from the First 3 Years",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7735207/",
        paperintro: "Walter S, Langford OG, Clanton TB, Jimenez-Maggiora GA, Raman R, Rafii MS, Shaffer EJ, Sperling RA, Cummings JL, Aisen PS. The Trial-Ready Cohort for Preclinical and Prodromal Alzheimer's Disease (TRC-PAD): Experience from the First 3 Years. J Prev Alzheimers Dis. 2020;7(4):234-241. doi: 10.14283/jpad.2020.47. PubMed PMID: 32920625; PubMed Central PMCID: PMC7767585.",
      },
   {
        title: "The Trial-Ready Cohort for Preclinical/Prodromal Alzheimer's Disease (TRC-PAD) Project: An Overview",
        url: "https://pubmed.ncbi.nlm.nih.gov/32920621/",
        paperintro: "Aisen PS, Sperling RA, Cummings J, Donohue MC, Langford O, Jimenez-Maggiora GA, Rissman RA, Rafii MS, Walter S, Clanton T, Raman R. The Trial-Ready Cohort for Preclinical/Prodromal Alzheimer's Disease (TRC-PAD) Project: An Overview. J Prev Alzheimers Dis. 2020;7(4):208-212. doi: 10.14283/jpad.2020.45. Review. PubMed PMID: 32920621; PubMed Central PMCID: PMC7735207.",
      },
   {
        title: "The Truth behind the Zeros: A New Approach to Principal Component Analysis of the Neuropsychiatric Inventory",
        url: "https://pubmed.ncbi.nlm.nih.gov/32329370/",
        paperintro: "Hellton KH, Cummings J, Vik-Mo AO, Nordrehaug JE, Aarsland D, Selbaek G, Giil LM. The Truth behind the Zeros: A New Approach to Principal Component Analysis of the Neuropsychiatric Inventory. Multivariate Behav Res. 2021 Jan-Feb;56(1):70-85. doi: 10.1080/00273171.2020.1736976. Epub 2020 Apr 24. PubMed PMID: 32329370; PubMed Central PMCID: PMC8867488.",
      },
   {
        title: "Translational Scoring of Candidate Treatments for Alzheimer's Disease: A Systematic Approach",
        url: "https://pubmed.ncbi.nlm.nih.gov/32512572/",
        paperintro: "Cummings JL. Translational Scoring of Candidate Treatments for Alzheimer's Disease: A Systematic Approach. Dement Geriatr Cogn Disord. 2020;49(1):22-37. doi: 10.1159/000507569. Epub 2020 Jun 8. Review. PubMed PMID: 32512572.",
      },
   {
        title: "TRC-PAD: Accelerating Recruitment of AD Clinical Trials through Innovative Information Technology",
        url: "https://pubmed.ncbi.nlm.nih.gov/32920624/",
        paperintro: "Jimenez-Maggiora GA, Bruschi S, Raman R, Langford O, Donohue M, Rafii MS, Sperling RA, Cummings JL, Aisen PS. TRC-PAD: Accelerating Recruitment of AD Clinical Trials through Innovative Information Technology. J Prev Alzheimers Dis. 2020;7(4):226-233. doi: 10.14283/jpad.2020.48. PubMed PMID: 32920624; PubMed Central PMCID: PMC7769128.",
      },
         {
        title: "Alzheimer’s disease drug development pipeline: 2019",
        url: "https://pubmed.ncbi.nlm.nih.gov/31334330/",
        paperintro:
          "Cummings J, Lee G, Ritter A, Sabbagh M, Zhong K. Alzheimer’s disease drug development pipeline: 2019. Alzheimer’s Dement 2019;5:272-293; doi:10.1016/j.trci.2019.05.008",
      },
        {
        title: "Alzheimer’s disease drug development pipeline: 2018",
        url: "https://pubmed.ncbi.nlm.nih.gov/29955663/",
        paperintro:
          "Cummings J, Lee G, Ritter A, Zhong K. Alzheimer’s disease drug development pipeline: 2018. Alzheimer’s Dement 2018;4:195-214; doi:10.1016/j.trci.2018.03.009",
      },
       {
        title: "Alzheimer’s disease drug development pipeline: 2017",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5651419/",
        paperintro:
          "Cummings J, Lee G, Mortsdorf T, Ritter A, Zhong K. Alzheimer’s disease drug development pipeline: 2017. Alzheimer’s Dement 2017;3:367-384; doi:10.1016/j.trci.2017.05.002",
      },


  //  {
  //       title: "",
  //       url: "",
  //       paperintro: "",
  //     },
  //  {
  //       title: "",
  //       url: "",
  //       paperintro: "",
  //     },






   
  //     {
  //       title:
  //         "Alzheimer’s disease drug development pipeline: 2020",
  //       url: "https://alz-journals.onlinelibrary.wiley.com/doi/full/10.1002/trc2.12050",
  //       paperintro:
  //         "Cummings J, Lee G, Ritter A, Sabbagh M, Zhong K. Alzheimer’s disease drug development pipeline: 2020. Alzheimer’s Dement 2020;6:e12050; doi:10.1002/trc2.12050",
  //     },

   
    
     
  //     {
  //       title: "Alzheimer’s disease drug-development pipeline: 2016",
  //       url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5651348/",
  //       paperintro:
  //         "Cummings J, Mortsdorf T, Lee G. Alzheimer’s disease drug-development pipeline: 2016. Alzheimer’s Dement 2016;2:222-232; doi:10.1016/j.trci.2016.07.001",
  //     },
     
     
  //     {
  //       title: "Innovative Therapeutic Development Programme for the Treatment of Early Alzheimer’s Disease: Lecanemab (BAN2401)",
  //       url: "https://touchneurology.com/alzheimers-disease-dementia/journal-articles/innovative-therapeutic-development-programme-for-the-treatment-of-early-alzheimers-disease-lecanemab-ban2401/",
  //       paperintro:
  //         "Cummings J. Innovative therapeutic development programme for the treatment of early Alzheimer’s disease: lecanemab (BAN2401). touchReviews in Neurol 2021;17(2); online ahead of print",
  //     },

      

   
     
      

  //             {
  //       title: "The amyloid-β pathway in Alzheimer’s disease. Mol Psychiatry 2021",
  //       url: "https://www.nature.com/articles/s41380-021-01249-0",
  //       paperintro:
  //         "Hampel H, Hardy J, Blennow K, Chen C, Perry G, Kim SH, Villemagne VL, Aisen P, Vendruscolo M, Masters CL, Cho M, Lannfelt L, Cummings JL, Vergallo A. The amyloid-β pathway in Alzheimer’s disease. Mol Psychiatry 2021; online ahead of print; doi: 10.1038/s41380-021-01249-0",
  //     },
     
  //            {
  //       title: "Multimodal single-cell/nucleus RNA sequencing data analysis uncovers molecular networks between disease-associated microglia and astrocytes with implications for drug repurposing in Alzheimer's disease",
  //       url: "https://pubmed.ncbi.nlm.nih.gov/33627474/",
  //       paperintro:
  //         "Xu J, Zhang P, Huang Y, Zhou Y, Hou Y, Bekris LM, Lathia J, Chiang CW, Li L, Pieper AA, Leverenz JB, Cummings J, Cheng F. Multimodal single-cell/nucleus RNA sequencing data analysis uncovers molecular networks Cummings JL, Goldman DP, Simmons-Stern NR, Ponton E. The costs of development treatments for Alzheimer’s disease: A retrospective exploration. Alzheimer Dement 2021;1-9; DOI: 10.1002/alz.12450",
  //     },
     
        
  //            {
  //       title: "State-of-the-art of lumbar puncture and its place in the journey of patients with Alzheimer’s disease. Alzheimer’s Dement 2021",
  //       url: "https://pubmed.ncbi.nlm.nih.gov/34043269/",
  //       paperintro:
  //         "Hampel H, Shaw LM, Aisen P, Chen C, Lleo A, Iwatsubo T, Iwata A, Yamada M, Ikeuchi T, Jia J, Want H, Teunissen CE, Peskind E, Blennow K, Cummings J, Vergallo A. State-of-the-art of lumbar puncture and its place in the journey of patients with Alzheimer’s disease. Alzheimer’s Dement 2021; epub ahead of print; doi/10.1002/alz.12372",
  //     },
     
     
     
       
    
   
  //                {
  //       title: "Value-Generating Exploratory Trials in Neurodegenerative Dementias",
  //       url: "https://pubmed.ncbi.nlm.nih.gov/33674360/",
  //       paperintro:
  //         "Friedman LG, McKeehan N, Hara Y, Cummings JL, Matthews DC, Zhu J, Mohs RC, Wang D, Hendrix SB, Quintana M, Schneider LS, Grundman M, Dickson SP, Feldman HH, Jaeger J, Finger EC, Ryan M, Niehoff D, Dickinson SLJ, Markowitz JT, Owen M, Travaglia A, Fillit HM. Value-generating exploratory trials in neurodegenerative dementias. Neurology 2021;96:944-954",
  //     },

   
     

    ],
  }),
  computed: {
    startIndex() {
      return (this.page - 1) * this.itemsPerPage;
    },
    numOfPages() {
      return this.featuresLength / this.itemsPerPage;
    },
    featuresLength() {
      return this.features.length;
    },
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px - ${this.$vuetify.application.top}px) `;
    },
  },
  methods: {
    async onSubmit() {},
    OnInput() {
      console.log("input");
      document.getElementById("start").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
