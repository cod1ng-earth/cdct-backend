# aims

=================================
what aims we want
- prio 1
    - avaoid getting out of sync
- prio 2
    - avoid uneccessary endpoints / properties
=================================




## cdct-backend


tag 10
backend v1
mock-server v1
(contract v1 ?????)
fe v1

po request new review feature

tag 11
- be team impements mock-server v2
- fe works on backlog

tag 12
- fe impl agains mock v2
- be impl backen v2

..
..

tag 15
- fe finished

.
.

tag 17
- be backend v2 finished
- be mock-server v3

tag 18
- fe mock v3 impl in fe





=======

tag 10
- be v1
- fe v1
- mock-s v1
- contract v1

(!!) a po appeared
- po needs feature X

tag 11
- fe creates contract v2
- fe transfer contract to provider
- be (provider) starts to fullfill the contract
- fe also starts to adapt the moch-s to new contract v2
- fe can start tu update the fe

tag 12
- be finished with be v2 (contract fullfilled)
- be can merge be v2 to master/prod

tag 13
- fe finished mock-s v2
- fe finished fe v2








=================================
idea 0
=================================
ci-fake-server
provider (be seite)
requests A gegen ci-fake-server
request B gegen sich selbs
request A == request B
= alles ok


fe seite
ci-fake-server
imple dagegen


Problem:
- ci-fake-server
    - where to put
    - how to share
    - who can adpat it?????
    - you never know what can go
        - you can't see who is responsible for an endpoint
        - you can't get rid of not used anymore endpoints
=================================









=================================
idea 1
----------------
provider-ci-test-apis
- only provider can use this in ci
- conracts runs against this api

ci-fake-server
- consumerA-ci-fake-server
- only consumer can use this
- consumer needs to run selenium tests
- consumer for integration tests
- contracts runs gaist this
- subset of fn's


contract
- shared document


=================================





=================================
idea 2
----------------
provider-ci-test-apis
- only provider can use this in ci
- conracts runs against this api

ci-fake-server
- consumerA-ci-fake-server
- only consumer can use this
- consumer needs to run selenium tests
- consumer for integration tests
- contracts runs gaist this
- subset of fn's
- for selenium testing needed (but looks like integration test)


contract
- shared document


=================================




=================================
idea 3
----------------
provider-ci-test-apis
- only provider can use this in ci
- conracts runs against this api
    - e.g. CRUD / D == reset
- fake api don't uses DB, only in memory ?!
- fake-endpoints are simple
    - ne deep knowledge or logic needed of the system
    - all I need is the interfacte of the original endpoints

consumer-contract-tests
- generates contracts

contract
- shared document

browser-automated-tests
- runs on stage/master env
- edge case tests (login, https, ...)
=================================



