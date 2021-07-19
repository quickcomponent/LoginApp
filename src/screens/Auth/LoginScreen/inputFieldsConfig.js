const first_name = 'first_name';
const last_name = 'last_name';
const email = 'email';
const password = 'password';

const firstNameField = {
  id: 0,
  key: first_name,
  placeholder: 'First name',
  isEditable: true,
  secureTextEntry: false,
};
const lastNameField = {
  id: 1,
  key: last_name,
  placeholder: 'Last name',
  isEditable: true,
  secureTextEntry: false,
};
const emailField = {
  id: 2,
  key: email,
  placeholder: 'Email',
  isEditable: true,
  secureTextEntry: false,
};
const passwordField = {
  id: 3,
  key: password,
  placeholder: 'Password',
  isEditable: true,
  secureTextEntry: true,
};

const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const regexForPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;

const SIGN_UP_FIELDS = [
  firstNameField,
  lastNameField,
  emailField,
  passwordField,
];
const LOG_IN_FIELDS = [emailField, passwordField];
const REGEX_FIELDS = {
  [first_name]: regexForNames,
  [last_name]: regexForNames,
  [email]: regexForEmail,
  [password]: regexForPassword,
};

export const FIELDS = {
  LOG_IN_FIELDS,
  SIGN_UP_FIELDS,
  REGEX_FIELDS,
};

export const FIELD_KEYS = {
  first_name,
  last_name,
  email,
  password,
};

export const ERROR_MESSAGES = {
  first_name: 'Kindly check that your first name is correct',
  last_name: 'Kindly check that your last name is correct',
  email: 'Kindly check that your email is correct',
  password: 'Password must contain a minimum of 6 characters including numbers',
};
