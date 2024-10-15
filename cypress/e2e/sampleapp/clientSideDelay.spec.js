/// <reference types="cypress" />

//import { onClientDelayPage } from "../../support/PageObject/ClientDelayPage"
import { navigateTo } from "../../support/PageObject/navigationPage"

describe('test suite',() => {

    it('client side delay test',  () => {
        //TC1: Verify user can access to Client Side Delay successfully 
        navigateTo.clientSideDelayPage()

        //TC2: Verify user can click on button and view the result
        //onClientDelayPage.clickButtonAndWaitResult()
        
    })
})