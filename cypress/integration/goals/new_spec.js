describe('Acheezements page', function() {

  before(function() {
    cy.visit('http://localhost:3000/acheezements')
    cy.get('#emailAddress').type('cypress@test.com')
    cy.get('#password').type('password')
    cy.get('button').click()
  })

it('checks title is `Acheezable`', function() {
    cy.visit('http://localhost:3000/acheezements/new')
    cy.get('title').contains('Acheezable')
  })

  it('checks header is `Create Acheezements`', function() {
    cy.get('h1').contains('Create Acheezements')
  })
});

describe('Adding a new goal', function() {
  before(function() {
    cy.visit('http://localhost:3000/acheezements')
    cy.get('#emailAddress').type('cypress@test.com')
    cy.get('#password').type('password')
    cy.get('button').click()
  })

  it('allows user to input and submit one goal', function() {
    cy.get('#inputGoal').type('Meditate')
    cy.get('#addGoal').click();
    cy.get('#viewGoals').click();
  })

  it('navigates to the View Acheezements page and shows the newly entered goal', function() {
    // Note: adding line 31 here prompts the user to log in again. Not sure why.
    cy.get('body').contains("Meditate")
  });

  it('allows user to input and submit a second goal', function() {
    cy.get('#inputGoal').type('Go for a run')
    cy.get('#addGoal').click();
    cy.get('#viewGoals').click();
  })

  it('navigates to the View Acheezements page and shows both goals', function() {
    // Note: adding line 31 here prompts the user to log in again. Not sure why.
    cy.get('body').contains("Meditate")
    cy.get('body').contains("Go for a run")
  });




});
