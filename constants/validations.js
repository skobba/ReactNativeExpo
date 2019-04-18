import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: 'Navn er påkrevd'
  },
  string: {
    firstname: 'firstname',
    min: 'Fornavn må ha minst ${min} tegn',
    required: 'Fornavn er påkrevd'
    //max: 'Valor muito longo (máximo ${max} caracteres)'
  }
//   ,
//   string: {
//     lastname: 'lastname',
//     min: 'Etternavn må ha minst ${min} tegn',
//     required: 'Etternavn er påkrevd'
//     //max: 'Valor muito longo (máximo ${max} caracteres)'
//   }
//   number: {
//     min: 'Fornavn må ha minst ${min} tegn',
//     //max: 'Valor inválido (deve ser menor ou igual a ${max})'
//     required: 'Fornavn er påkrevd'
//   }
}
);

export default yup;