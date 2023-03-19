export const routes = {
  NOT_FOUND: '*',
  HOME: '/',
  ABOUT_US: '/a-propos',
  LOGEMENT: '/logement/:id',
  LOGEMENT_NAVIGATE: (id) => `/logement/${id}`,
}