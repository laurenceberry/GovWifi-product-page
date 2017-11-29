var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/verify', (req, res) => {
  res.render('govuk-verify/index')
})

router.get('/how-to-connect', (req, res) => {
  res.render('task-list/index', {
    'steps': [ 
      [{ 
          'name': 'Before you start',
          'content': '',
          'subtasks': [
            {
              'name': 'Learn how Verify works',
              'href': '/verify'
            },
            {
              'name': 'Understand if your users need to prove their identity',
              'href': '/verify'
            },
            {
              'name': 'See whether Verify meets your service’s identity needs',
              'href': '/verify'
            },
            {
              'name': 'Decide what level of assurance your service needs',
              'href': '/verify'
            },
            {
              'name': 'Make sure you have the right skills in your team',
              'href': '/verify'
            }
          ]
        }],
        [{ 
          'name': 'Research and design your service with Verify',
          'content': '',
          'subtasks': [
            {
              'name': 'Connect your prototype to Verify',
              'href': '/connect-to-verify'
            },
            {
              'name': 'Figure out where Verify fits in your user journey',
              'href': '/verify'
            },
            {
              'name': 'Determine how you will use the verified identity data in your service',
              'href': '/verify'
            }
          ]
        }]
      , 
        [{ 
          'name': 'Connect Verify to your service',
          'content': '',
          'subtasks': [
            {
              'name': 'Set up your service to send and receive messages from Verify',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/index.html'
            },
            {
              'name': 'Test that your service can send and receive message from Verify',
              'href': '/connect-to-verify'
            },
            {
              'name': 'Connect your service to the test environment',
              'href': '/connect-to-verify'
            }
          ]
        },
        { 
          'name': 'Prepare for production',
          'content': '',
          'subtasks': [
            {
              'name': 'Understand the operational support model',
              'href': '#'
            },
            {
              'name': 'Make sure you have user support for your live service',
              'href': '#'
            },
            {
              'name': 'Sign the Code of Interoperability',
              'href': '#'
            },
            {
              'name': "Send us a description of your service's volumes and demographics",
              'href': '#'
            }
          ]
        }],
        [{ 
          'name': "Once you're connected",
          'content': '',
          'subtasks': [
            {
              'name': 'Manage your connections to Verify',
              'href': '/connect-to-verify'
            },
            {
              'name': 'Manage your certificates',
              'href': '/connect-to-verify'
            },
            {
              'name': 'Contact Verify for support',
              'href': '#'
            }
          ]
        }]
      ]
  })
})

module.exports = router

