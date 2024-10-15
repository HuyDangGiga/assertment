import { onClientDelayPage } from "../../support/PageObject/clientDelayPage"
import { onClassAttributePage } from "../../support/PageObject/classAttributePage"
import { navigateTo } from "../../support/PageObject/navigationPage"
import { onSampleAppPage } from "../../support/PageObject/sampleAppPage"
import { onVerifyTextPage } from "../../support/PageObject/verifyTextPage"


describe('Test full flow', () =>{
    beforeEach('open application', () =>{
        cy.visit('/')
    })

    it('Execute flow', () => {
        //ClassAttribute page
        navigateTo.classAttributePage()
        onClassAttributePage.clickButtonAndCheckAlert()

        //ClientSideDelay page
        navigateTo.clientSideDelayPage()
        onClientDelayPage.clickButtonAndWaitResult()

        //SampleApp page
        navigateTo.sampleAppPage()
        onSampleAppPage.loginSuccessfull('Huy','pwd')
        onSampleAppPage.logout()
        const usernames = ['!@#$',' ','Huy']
        cy.wrap(usernames).each(username => {
            onSampleAppPage.loginSuccessfull(username,'pwd')
            onSampleAppPage.logout()
        })
        onSampleAppPage.loginFailedWithoutUsername('pwd')    
        const passwords = [' ', 'password']
        cy.wrap(passwords).each( password => {
            onSampleAppPage.loginFailed(password)
        })

        //VerifyText page
        navigateTo.verifyTextPage()
        onVerifyTextPage.checkthePrimaryText('Welcome UserName!')
        onVerifyTextPage.checktheSecondaryText('Hello UserName!')

    })
})