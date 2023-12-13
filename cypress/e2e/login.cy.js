/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email is required');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('testuser');
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Password is required');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('testuser@example.com');
    cy.get('input[placeholder="Password"]').type('wrong_password');
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email or password is incorrect');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="Email"]').type('testuser@example.com');
    cy.get('input[placeholder="Password"]').type('test123456');
    cy.get('button').contains(/^Login$/).click();
    cy.get('nav').contains(/^Thread$/).should('be.visible');
    cy.get('h2').contains('Kategori Popular').should('be.visible');
  });
});


