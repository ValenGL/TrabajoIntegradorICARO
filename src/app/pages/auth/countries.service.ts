import { Injectable } from '@angular/core';
import { Country } from '../../shared/models/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  countries: Country[] = [
    {
      name: 'Afganistán',
    },
    {
      name: 'Albania',
    },
    {
      name: 'Alemania',
    },
    {
      name: 'Algeria',
    },
    {
      name: 'Andorra',
    },
    {
      name: 'Angola',
    },
    {
      name: 'Anguilla',
    },
    {
      name: 'Antigua y Barbuda',
    },
    {
      name: 'Antillas Holandesas',
    },
    {
      name: 'Arabia Saudita',
    },
    {
      name: 'Argentina',
    },
    {
      name: 'Armenia',
    },
    {
      name: 'Aruba',
    },
    {
      name: 'Australia',
    },
    {
      name: 'Austria',
    },
    {
      name: 'Azerbaiyán',
    },
    {
      name: 'Bahamas',
    },
    {
      name: 'Bahrein',
    },
    {
      name: 'Bangladesh',
    },
    {
      name: 'Barbados',
    },
    {
      name: 'Bélgica',
    },
    {
      name: 'Belice',
    },
    {
      name: 'Benín',
    },
    {
      name: 'Bermudas',
    },
    {
      name: 'Bielorrusia',
    },
    {
      name: 'Bolivia',
    },
    {
      name: 'Bosnia y Herzegovina',
    },
    {
      name: 'Botsuana',
    },
    {
      name: 'Brasil',
    },
    {
      name: 'Brunéi',
    },
    {
      name: 'Bulgaria',
    },
    {
      name: 'Burkina Faso',
    },
    {
      name: 'Burundi',
    },
    {
      name: 'Bután',
    },
    {
      name: 'Cabo Verde',
    },
    {
      name: 'Camboya',
    },
    {
      name: 'Camerún',
    },
    {
      name: 'Canadá',
    },
    {
      name: 'Chad',
    },
    {
      name: 'Chile',
    },
    {
      name: 'China',
    },
    {
      name: 'Chipre',
    },
    {
      name: 'Colombia',
    },
    {
      name: 'Comores',
    },
    {
      name: 'Congo (Brazzaville)',
    },
    {
      name: 'Congo (Kinshasa)',
    },
    {
      name: 'Cook, Islas',
    },
    {
      name: 'Corea del Norte',
    },
    {
      name: 'Corea del Sur',
    },
    {
      name: 'Costa de Marfil',
    },
    {
      name: 'Costa Rica',
    },
    {
      name: 'Croacia',
    },
    {
      name: 'Cuba',
    },
    {
      name: 'Dinamarca',
    },
    {
      name: 'Djibouti, Yibuti',
    },
    {
      name: 'Ecuador',
    },
    {
      name: 'Egipto',
    },
    {
      name: 'El Salvador',
    },
    {
      name: 'Emiratos Árabes Unidos',
    },
    {
      name: 'Eritrea',
    },
    {
      name: 'Eslovaquia',
    },
    {
      name: 'Eslovenia',
    },
    {
      name: 'España',
    },
    {
      name: 'Estados Unidos',
    },
    {
      name: 'Estonia',
    },
    {
      name: 'Etiopía',
    },
    {
      name: 'Feroe, Islas',
    },
    {
      name: 'Filipinas',
    },
    {
      name: 'Finlandia',
    },
    {
      name: 'Fiyi',
    },
    {
      name: 'Francia',
    },
    {
      name: 'Gabón',
    },
    {
      name: 'Gambia',
    },
    {
      name: 'Georgia',
    },
    {
      name: 'Ghana',
    },
    {
      name: 'Gibraltar',
    },
    {
      name: 'Granada',
    },
    {
      name: 'Grecia',
    },
    {
      name: 'Groenlandia',
    },
    {
      name: 'Guadalupe',
    },
    {
      name: 'Guatemala',
    },
    {
      name: 'Guernsey',
    },
    {
      name: 'Guinea',
    },
    {
      name: 'Guinea Ecuatorial',
    },
    {
      name: 'Guinea-Bissau',
    },
    {
      name: 'Guyana',
    },
    {
      name: 'Haiti',
    },
    {
      name: 'Honduras',
    },
    {
      name: 'Hong Kong',
    },
    {
      name: 'Hungría',
    },
    {
      name: 'India',
    },
    {
      name: 'Indonesia',
    },
    {
      name: 'Irak',
    },
    {
      name: 'Irán',
    },
    {
      name: 'Irlanda',
    },
    {
      name: 'Isla Pitcairn',
    },
    {
      name: 'Islandia',
    },
    {
      name: 'Islas Salomón',
    },
    {
      name: 'Islas Turcas y Caicos',
    },
    {
      name: 'Islas Virgenes Británicas',
    },
    {
      name: 'Israel',
    },
    {
      name: 'Italia',
    },
    {
      name: 'Jamaica',
    },
    {
      name: 'Japón',
    },
    {
      name: 'Jersey',
    },
    {
      name: 'Jordania',
    },
    {
      name: 'Kazajstán',
    },
    {
      name: 'Kenia',
    },
    {
      name: 'Kirguistán',
    },
    {
      name: 'Kiribati',
    },
    {
      name: 'Kuwait',
    },
    {
      name: 'Laos',
    },
    {
      name: 'Lesotho',
    },
    {
      name: 'Letonia',
    },
    {
      name: 'Líbano',
    },
    {
      name: 'Liberia',
    },
    {
      name: 'Libia',
    },
    {
      name: 'Liechtenstein',
    },
    {
      name: 'Lituania',
    },
    {
      name: 'Luxemburgo',
    },
    {
      name: 'Macedonia',
    },
    {
      name: 'Madagascar',
    },
    {
      name: 'Malasia',
    },
    {
      name: 'Malawi',
    },
    {
      name: 'Maldivas',
    },
    {
      name: 'Malí',
    },
    {
      name: 'Malta',
    },
    {
      name: 'Man, Isla de',
    },
    {
      name: 'Marruecos',
    },
    {
      name: 'Martinica',
    },
    {
      name: 'Mauricio',
    },
    {
      name: 'Mauritania',
    },
    {
      name: 'México',
    },
    {
      name: 'Moldavia',
    },
    {
      name: 'Mónaco',
    },
    {
      name: 'Mongolia',
    },
    {
      name: 'Mozambique',
    },
    {
      name: 'Myanmar',
    },
    {
      name: 'Namibia',
    },
    {
      name: 'Nauru',
    },
    {
      name: 'Nepal',
    },
    {
      name: 'Nicaragua',
    },
    {
      name: 'Níger',
    },
    {
      name: 'Nigeria',
    },
    {
      name: 'Norfolk Island',
    },
    {
      name: 'Noruega',
    },
    {
      name: 'Nueva Caledonia',
    },
    {
      name: 'Nueva Zelanda',
    },
    {
      name: 'Omán',
    },
    {
      name: 'Países Bajos, Holanda',
    },
    {
      name: 'Pakistán',
    },
    {
      name: 'Panamá',
    },
    {
      name: 'Papúa-Nueva Guinea',
    },
    {
      name: 'Paraguay',
    },
    {
      name: 'Perú',
    },
    {
      name: 'Polinesia Francesa',
    },
    {
      name: 'Polonia',
    },
    {
      name: 'Portugal',
    },
    {
      name: 'Puerto Rico',
    },
    {
      name: 'Qatar',
    },
    {
      name: 'Reino Unido',
    },
    {
      name: 'República Checa',
    },
    {
      name: 'República Dominicana',
    },
    {
      name: 'Reunión',
    },
    {
      name: 'Ruanda',
    },
    {
      name: 'Rumanía',
    },
    {
      name: 'Rusia',
    },
    {
      name: 'Sáhara Oc',
    },
    {
      name: 'Samoa',
    },
    {
      name: 'San Cristobal y Nevis',
    },
    {
      name: 'San Marino',
    },
    {
      name: 'San Pedro y Miquelón',
    },
    {
      name: 'San Tomé y Príncipe',
    },
    {
      name: 'San Vincente y Granadinas',
    },
    {
      name: 'Santa Elena',
    },
    {
      name: 'Santa Lucía',
    },
    {
      name: 'Senegal',
    },
    {
      name: 'Serbia y Montenegro',
    },
    {
      name: 'Seychelles',
    },
    {
      name: 'Sierra Leona',
    },
    {
      name: 'Singapur',
    },
    {
      name: 'Siria',
    },
    {
      name: 'Somalia',
    },
    {
      name: 'Sri Lanka',
    },
    {
      name: 'Sudáfrica',
    },
    {
      name: 'Sudán',
    },
    {
      name: 'Suecia',
    },
    {
      name: 'Suiza',
    },
    {
      name: 'Surinam',
    },
    {
      name: 'Swazilandia',
    },
    {
      name: 'Tadjikistan',
    },
    {
      name: 'Tailandia',
    },
    {
      name: 'Taiwan',
    },
    {
      name: 'Tanzania',
    },
    {
      name: 'Timor Oriental',
    },
    {
      name: 'Togo',
    },
    {
      name: 'Tokelau',
    },
    {
      name: 'Tonga',
    },
    {
      name: 'TriTobago',
    },
    {
      name: 'Túnez',
    },
    {
      name: 'Turkmenistan',
    },
    {
      name: 'Turquía',
    },
    {
      name: 'Tuvalu',
    },
    {
      name: 'Ucrania',
    },
    {
      name: 'Uganda',
    },
    {
      name: 'Uruguay',
    },
    {
      name: 'Uzbekistán',
    },
    {
      name: 'Vanuatu',
    },
    {
      name: 'Venezuela',
    },
    {
      name: 'Vietnam',
    },
    {
      name: 'Wallis y Futuna',
    },
    {
      name: 'Yemen',
    },
    {
      name: 'Zambia',
    },
    {
      name: 'Zimbabwe',
    },
  ];

  getCountries(): Country[] {
    return this.countries;
  }

  constructor() {}
}
