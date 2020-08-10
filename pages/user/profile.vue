<template>
  <Page title="Profil">
    <FormulateForm
      v-if="loaded"
      class="pb-20"
      :values="values"
      @submit="submit"
    >
      <FormulateInput
        type="date"
        name="created_at"
        label="Je suis confiné depuis le"
        :validation="[['required'], ['after', '2020-01-01'], ['before', new Date()]]"
        min="2020-01-01"
        :validation-messages="{
          required: 'La date de début est obligatoire',
          after: 'La date est trop ancienne',
          before: 'La date doit être passée'
        }"
      />
      <FormulateInput
        name="carnet_location"
        type="text"
        label="Dans la commune"
        validation="required"
      />
      <FormulateInput
        name="carnet_country"
        type="select"
        :options="countries"
        label="Dans le pays"
        placeholder="Sélectionner"
        validation="required"
      />
      <FormulateInput
        name="usual_location"
        type="text"
        label="Ma résidence principale est dans la commune de"
        validation="required"
      />
      <FormulateInput
        name="usual_country"
        type="select"
        :options="countries"
        label="Ma résidence principale est dans la pays"
        validation="required"
      />
      <FormulateInput
        name="nationality"
        type="text"
        label="Nationalité"
        validation="required"
      />
      <FormulateInput
        name="job_title"
        type="text"
        label="Activité professionnelle principale"
        validation="required"
      />
      <FormulateInput
        name="job_week_hours"
        type="number"
        label="Volume horaire hebdomadaire travaillé avant le confinement"
        min="0"
        max="168"
        validation="required"
      />
      <FormulateInput
        v-if="!values.id"
        name="autorisation1"
        type="checkbox"
        label="J’accepte librement et volontairement de participer au projet de recherche intitulé"
        validation="required"
      >
        <template #label="{ label, id }">
          <label :for="id" class="formulate-input-label formulate-input-label--after">
            {{ label }} <q>Récits Confinés</q>.
          </label>
        </template>
      </FormulateInput>
      <FormulateInput
        v-if="!values.id"
        name="autorisation2"
        type="checkbox"
        label="Je suis informé·e qu’à tout moment, je peux interrompre ma participation dans cette étude, sans que cela me porte préjudice."
        validation="required"
      />
      <FormulateInput
        v-if="!values.id"
        name="autorisation3"
        type="checkbox"
        label="J’ai été informé·e de la protection et de la confidentialité des informations et j’y consens."
        validation="required"
      >
        <template #label="{ label, id }">
          <label :for="id" class="formulate-input-label formulate-input-label--after">
            {{ label }}
            <nuxt-link
              to="/privacy"
              class="text-main hover:text-black"
              target="_blank"
            >
              Lire la politique de confidentialité
            </nuxt-link>
          </label>
        </template>
      </FormulateInput>

      <FormulateErrors />
      <FormulateInput
        type="submit"
        label="Je valide mon profil"
      />
    </FormulateForm>
  </Page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Page from '@/components/Page'

export default {
  components: {
    Page
  },
  data () {
    return {
      countries: {
        AFG: 'Afghanistan',
        ALA: 'Åland Islands',
        ALB: 'Albania',
        DZA: 'Algeria',
        ASM: 'American Samoa',
        AND: 'Andorra',
        AGO: 'Angola',
        AIA: 'Anguilla',
        ATA: 'Antarctica',
        ATG: 'Antigua and Barbuda',
        ARG: 'Argentina',
        ARM: 'Armenia',
        ABW: 'Aruba',
        AUS: 'Australia',
        AUT: 'Austria',
        AZE: 'Azerbaijan',
        BHS: 'Bahamas',
        BHR: 'Bahrain',
        BGD: 'Bangladesh',
        BRB: 'Barbados',
        BLR: 'Belarus',
        BEL: 'Belgium',
        BLZ: 'Belize',
        BEN: 'Benin',
        BMU: 'Bermuda',
        BTN: 'Bhutan',
        BOL: 'Bolivia, Plurinational State of',
        BES: 'Bonaire, Sint Eustatius and Saba',
        BIH: 'Bosnia and Herzegovina',
        BWA: 'Botswana',
        BVT: 'Bouvet Island',
        BRA: 'Brazil',
        IOT: 'British Indian Ocean Territory',
        BRN: 'Brunei Darussalam',
        BGR: 'Bulgaria',
        BFA: 'Burkina Faso',
        BDI: 'Burundi',
        KHM: 'Cambodia',
        CMR: 'Cameroon',
        CAN: 'Canada',
        CPV: 'Cape Verde',
        CYM: 'Cayman Islands',
        CAF: 'Central African Republic',
        TCD: 'Chad',
        CHL: 'Chile',
        CHN: 'China',
        CXR: 'Christmas Island',
        CCK: 'Cocos (Keeling) Islands',
        COL: 'Colombia',
        COM: 'Comoros',
        COG: 'Congo',
        COD: 'Congo, the Democratic Republic of the',
        COK: 'Cook Islands',
        CRI: 'Costa Rica',
        CIV: 'Côte d\'Ivoire',
        HRV: 'Croatia',
        CUB: 'Cuba',
        CUW: 'Curaçao',
        CYP: 'Cyprus',
        CZE: 'Czech Republic',
        DNK: 'Denmark',
        DJI: 'Djibouti',
        DMA: 'Dominica',
        DOM: 'Dominican Republic',
        ECU: 'Ecuador',
        EGY: 'Egypt',
        SLV: 'El Salvador',
        GNQ: 'Equatorial Guinea',
        ERI: 'Eritrea',
        EST: 'Estonia',
        ETH: 'Ethiopia',
        FLK: 'Falkland Islands (Malvinas)',
        FRO: 'Faroe Islands',
        FJI: 'Fiji',
        FIN: 'Finland',
        FRA: 'France',
        GUF: 'French Guiana',
        PYF: 'French Polynesia',
        ATF: 'French Southern Territories',
        GAB: 'Gabon',
        GMB: 'Gambia',
        GEO: 'Georgia',
        DEU: 'Germany',
        GHA: 'Ghana',
        GIB: 'Gibraltar',
        GRC: 'Greece',
        GRL: 'Greenland',
        GRD: 'Grenada',
        GLP: 'Guadeloupe',
        GUM: 'Guam',
        GTM: 'Guatemala',
        GGY: 'Guernsey',
        GIN: 'Guinea',
        GNB: 'Guinea-Bissau',
        GUY: 'Guyana',
        HTI: 'Haiti',
        HMD: 'Heard Island and McDonald Islands',
        VAT: 'Holy See (Vatican City State)',
        HND: 'Honduras',
        HKG: 'Hong Kong',
        HUN: 'Hungary',
        ISL: 'Iceland',
        IND: 'India',
        IDN: 'Indonesia',
        IRN: 'Iran, Islamic Republic of',
        IRQ: 'Iraq',
        IRL: 'Ireland',
        IMN: 'Isle of Man',
        ISR: 'Israel',
        ITA: 'Italy',
        JAM: 'Jamaica',
        JPN: 'Japan',
        JEY: 'Jersey',
        JOR: 'Jordan',
        KAZ: 'Kazakhstan',
        KEN: 'Kenya',
        KIR: 'Kiribati',
        PRK: 'Korea, Democratic People\'s Republic of',
        KOR: 'Korea, Republic of',
        KWT: 'Kuwait',
        KGZ: 'Kyrgyzstan',
        LAO: 'Lao People\'s Democratic Republic',
        LVA: 'Latvia',
        LBN: 'Lebanon',
        LSO: 'Lesotho',
        LBR: 'Liberia',
        LBY: 'Libya',
        LIE: 'Liechtenstein',
        LTU: 'Lithuania',
        LUX: 'Luxembourg',
        MAC: 'Macao',
        MKD: 'Macedonia, the former Yugoslav Republic of',
        MDG: 'Madagascar',
        MWI: 'Malawi',
        MYS: 'Malaysia',
        MDV: 'Maldives',
        MLI: 'Mali',
        MLT: 'Malta',
        MHL: 'Marshall Islands',
        MTQ: 'Martinique',
        MRT: 'Mauritania',
        MUS: 'Mauritius',
        MYT: 'Mayotte',
        MEX: 'Mexico',
        FSM: 'Micronesia, Federated States of',
        MDA: 'Moldova, Republic of',
        MCO: 'Monaco',
        MNG: 'Mongolia',
        MNE: 'Montenegro',
        MSR: 'Montserrat',
        MAR: 'Morocco',
        MOZ: 'Mozambique',
        MMR: 'Myanmar',
        NAM: 'Namibia',
        NRU: 'Nauru',
        NPL: 'Nepal',
        NLD: 'Netherlands',
        NCL: 'New Caledonia',
        NZL: 'New Zealand',
        NIC: 'Nicaragua',
        NER: 'Niger',
        NGA: 'Nigeria',
        NIU: 'Niue',
        NFK: 'Norfolk Island',
        MNP: 'Northern Mariana Islands',
        NOR: 'Norway',
        OMN: 'Oman',
        PAK: 'Pakistan',
        PLW: 'Palau',
        PSE: 'Palestinian Territory, Occupied',
        PAN: 'Panama',
        PNG: 'Papua New Guinea',
        PRY: 'Paraguay',
        PER: 'Peru',
        PHL: 'Philippines',
        PCN: 'Pitcairn',
        POL: 'Poland',
        PRT: 'Portugal',
        PRI: 'Puerto Rico',
        QAT: 'Qatar',
        REU: 'Réunion',
        ROU: 'Romania',
        RUS: 'Russian Federation',
        RWA: 'Rwanda',
        BLM: 'Saint Barthélemy',
        SHN: 'Saint Helena, Ascension and Tristan da Cunha',
        KNA: 'Saint Kitts and Nevis',
        LCA: 'Saint Lucia',
        MAF: 'Saint Martin (French part)',
        SPM: 'Saint Pierre and Miquelon',
        VCT: 'Saint Vincent and the Grenadines',
        WSM: 'Samoa',
        SMR: 'San Marino',
        STP: 'Sao Tome and Principe',
        SAU: 'Saudi Arabia',
        SEN: 'Senegal',
        SRB: 'Serbia',
        SYC: 'Seychelles',
        SLE: 'Sierra Leone',
        SGP: 'Singapore',
        SXM: 'Sint Maarten (Dutch part)',
        SVK: 'Slovakia',
        SVN: 'Slovenia',
        SLB: 'Solomon Islands',
        SOM: 'Somalia',
        ZAF: 'South Africa',
        SGS: 'South Georgia and the South Sandwich Islands',
        SSD: 'South Sudan',
        ESP: 'Spain',
        LKA: 'Sri Lanka',
        SDN: 'Sudan',
        SUR: 'Suriname',
        SJM: 'Svalbard and Jan Mayen',
        SWZ: 'Swaziland',
        SWE: 'Sweden',
        CHE: 'Switzerland',
        SYR: 'Syrian Arab Republic',
        TWN: 'Taiwan, Province of China',
        TJK: 'Tajikistan',
        TZA: 'Tanzania, United Republic of',
        THA: 'Thailand',
        TLS: 'Timor-Leste',
        TGO: 'Togo',
        TKL: 'Tokelau',
        TON: 'Tonga',
        TTO: 'Trinidad and Tobago',
        TUN: 'Tunisia',
        TUR: 'Turkey',
        TKM: 'Turkmenistan',
        TCA: 'Turks and Caicos Islands',
        TUV: 'Tuvalu',
        UGA: 'Uganda',
        UKR: 'Ukraine',
        ARE: 'United Arab Emirates',
        GBR: 'United Kingdom',
        USA: 'United States',
        UMI: 'United States Minor Outlying Islands',
        URY: 'Uruguay',
        UZB: 'Uzbekistan',
        VUT: 'Vanuatu',
        VEN: 'Venezuela, Bolivarian Republic of',
        VNM: 'Viet Nam',
        VGB: 'Virgin Islands, British',
        VIR: 'Virgin Islands, U.S.',
        WLF: 'Wallis and Futuna',
        ESH: 'Western Sahara',
        YEM: 'Yemen',
        ZMB: 'Zambia',
        ZWE: 'Zimbabwe'
      }
    }
  },
  computed: {
    ...mapState({
      values: state => state.user,
      loaded: state => state.isLoaded
    })
  },
  methods: {
    ...mapActions({
      save: 'user/submit',
      store: 'user/store'
    }),
    async submit (data) {
      this.$nuxt.$loading.start()
      const initiated = !!this.values.name
      await this.save({ type: 'profile', data })
      await this.store()
      this.$router.push(initiated ? '/user/end' : '/user/initial')
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

<style scoped>
</style>
