import { faker } from "@faker-js/faker/locale/pt_BR";
import { cpf } from 'cpf-cnpj-validator';

export enum Gender {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
  OUTRO = 'OUTRO'
}

export enum DocumentType {
  CPF = 'CPF',
  CNPJ = 'CNPJ',
  RNE = 'RNE'
}

export enum PhoneType {
  RESIDENCIAL = 'FIXO',
  CELULAR = 'CELULAR',
  COMERCIAL = 'TELEFONE COMERCIAL',
  EMERGENCIA = 'EMERGÊNCIA'
}

export enum Media {
  INDIQUE_AMIGO = "INDIQUE AMIGO",
  PASSANTE = "PASSANTE",
  APLICATIVO = "APLICATIVO",
  REVENDA = "REVENDA" 
}

export enum ContactPreference {
  WHATSAPP = "WHATSAPP",
  TELEFONE = "TELEFONE",
  EMAIL = "EMAIL"
}


/**
 * Gera um email com o prefixo fornecido e o sufixo fixo @uorak.com.
 * @returns {string} O email gerado.
 */
function gerarEmailComSufixoUORAK(): string {
  const prefixo = faker.internet.username();
  const stage = 'stage';
  return `${prefixo}+-+${stage}@uorak.com`;
}


export type Perfil = {
  documentType: DocumentType,
  cpf: string,
  name: string,
  fullName: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  gender: Gender,
  birthCountry: string,
  postalCode: string,
  address: string,
  city: string,
  state: string,
  country: string,
  countryCode: string,
  phoneType: PhoneType,
  phone: string,
  email: string,
  media: Media,
  contactPreference: ContactPreference
};

export function gerarPerfil(): Perfil {
  const birthDate = faker.date.birthdate();
  const formatedBirthDate = birthDate.toISOString().split('T')[0]; // yyyy-mm-dd

  return {
    documentType: DocumentType.CPF,
    cpf: cpf.generate(),
    name: faker.person.fullName(),
    fullName: faker.person.fullName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    gender: faker.helpers.enumValue(Gender),
    birthDate: formatedBirthDate,
    birthCountry: faker.location.country(),
    postalCode: faker.location.zipCode('#####-###'),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    countryCode: faker.location.countryCode(),
    phoneType: PhoneType.CELULAR,
    phone: faker.helpers.fromRegExp('[1-9]{2}9{1}[1-9]{8}'),
    email: gerarEmailComSufixoUORAK(),
    media: faker.helpers.enumValue(Media),
    contactPreference: faker.helpers.enumValue(ContactPreference)
  };

}


