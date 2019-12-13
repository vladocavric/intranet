let loremIpsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
describe('log-in', function () {

  beforeEach(function () {
    Cypress.Cookies.preserveOnce('_hjid', 'intercom-id-fpj1518t', 'SESS38a91a9006ad29ac470602f62d277cff', 'SimpleSAMLSessionID')
  })

  it('home page', function () {
    cy.visit('/', {
      auth: {
        username: 'itfintranet',
        password: 'ed2018'
      }
    })

    // cy.wait(500)

    cy.get('#edit-name').type('vlado.cavric@etondigital.com')

    cy.get('#edit-pass').focus().type('123456')

    cy.get('form.user-login-form').submit()
  })

  // it('create notice for sidney office', function () {

  //   let sydneyNoticeTitle = 'this is an automated test for notice node published in sydney office';

  //   cy.get('body > div > div.header > div.header--main > div.navigation-actions > div > a').click()

  //   cy.get('ul.nav').should('be.visible')

  //   cy.get('#block-itfintranet-main-menu > ul > li:nth-child(2) > a').click()

  //   cy.get('#block-itfintranet-content > article > div > div.field.field--name-field-landing-page-items.field--type-entity-reference-revisions.field--label-hidden.field--items > div:nth-child(5) > div > div.paragraph--content > div.paragraph--link > div > a').click()

  //   cy.get('#block-sidebarlinkaddanotice > div.block-landing-sidebar--inner-wrap > div.block-landing-sidebar--link > div > div > a').click()

  //   cy
  //     .get('#edit-field-office').find('div')
  //     .should(($div) => {

  //       expect($div).to.have.length.of.at.least(11)
  //     })

  //   cy.get('#edit-title-0-value').type(sydneyNoticeTitle)

  //   cy.contains('Sydney').should('be.visible').click()

  //   cy.scrollTo(0, 700)

  //   cy.type_ckeditor('edit-body-0-value', loremIpsum)

  //   cy.get('input[name="op"]').click({
  //     force: true
  //   })

  //   cy.get('#block-views-block-announcements-block-1').should('not.contain', sydneyNoticeTitle)

  // })



  // it('create notice for all offices', function () {

  //   let allOfficeNoticeTitle = 'this is an automated test for notice node published in all offices';

  //   cy.get('body > div > div.header > div.header--main > div.navigation-actions > div > a').click()

  //   cy.get('ul.nav').should('be.visible')

  //   cy.get('#block-itfintranet-main-menu > ul > li:nth-child(2) > a').click()

  //   cy.get('#block-itfintranet-content > article > div > div.field.field--name-field-landing-page-items.field--type-entity-reference-revisions.field--label-hidden.field--items > div:nth-child(5) > div > div.paragraph--content > div.paragraph--link > div > a').click()

  //   cy.get('#block-sidebarlinkaddanotice > div.block-landing-sidebar--inner-wrap > div.block-landing-sidebar--link > div > div > a').click()

  //   cy.get('#edit-title-0-value').type(allOfficeNoticeTitle)

  //   cy.contains('All offices').should('be.visible').click()

  //   cy.get('input[id="edit-field-office-21"]').should('be.checked')

  //   cy.scrollTo(0, 700)

  //   cy.type_ckeditor('edit-body-0-value', loremIpsum)

  //   cy.get('input[name="op"]').click({
  //     force: true
  //   })

  //   cy.get('.content--title').should('contain', allOfficeNoticeTitle)

  //   cy.get('body > div.dialog-off-canvas-main-canvas > div.header > div.header--main > div.navigation-actions > div > div.c-logo.c-logo--mobile > a').click()

  //   cy.get('#block-views-block-staff-noticeboard-block-1 > div > div').should('contain', allOfficeNoticeTitle)

  // })



  it('create notice for all offices', function () {

    let allOfficeNoticeTitle = 'this is an automated test for notice node published in all offices';

    cy.get('body > div > div.header > div.header--main > div.navigation-actions > div > a').click()

    cy.get('ul.nav').should('be.visible')

    cy.get('#block-itfintranet-main-menu > ul > li:nth-child(2) > a').click()

    cy.get('#block-itfintranet-content > article > div > div.field.field--name-field-landing-page-items.field--type-entity-reference-revisions.field--label-hidden.field--items > div:nth-child(5) > div > div.paragraph--content > div.paragraph--link > div > a').click()

    cy.get('#block-sidebarlinkaddanotice > div.block-landing-sidebar--inner-wrap > div.block-landing-sidebar--link > div > div > a').click()

    cy.get('#edit-title-0-value').type(allOfficeNoticeTitle)

    cy.contains('All offices').should('be.visible').click()

    cy.get('input[id="edit-field-office-21"]').should('be.checked')

    cy.scrollTo(0, 700)

    cy.type_ckeditor('edit-body-0-value', loremIpsum)

    cy.get('input[name="op"]').click({
      force: true
    })

    cy.get('.content--title').should('contain', allOfficeNoticeTitle)

    cy.get('body > div.dialog-off-canvas-main-canvas > div.header > div.header--main > div.navigation-actions > div > div.c-logo.c-logo--mobile > a').click()

    cy.get('#block-views-block-staff-noticeboard-block-1 > div > div').should('contain', allOfficeNoticeTitle)

  })
})