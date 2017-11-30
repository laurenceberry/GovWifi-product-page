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
          'subtasks': [
            {
              'name': 'Learn how Verify works',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'Understand if your users need to prove their identity',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'See whether Verify meets your service’s identity needs',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'Decide what level of assurance your service needs',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'Make sure you have the right skills in your team',
              'href': '/how-to-connect/not-implemented'
            }
          ]
        }],
        [{ 
          'name': 'Research and design your service with Verify',
          'subtasks': [
            {
              'name': 'Figure out where Verify fits in your user journey',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'View case studies',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'Connect your prototype to the Verify demo',
              'href': '/connect-to-verify'
            },
            {
              'name': 'Determine how you will use the verified identity data in your service',
              'href': '/how-to-connect/not-implemented'
            }
          ]
        }]
      , 
        [{ 
          'name': 'Connect Verify to your service',
          'subtasks': [
            {
              'name': 'Set up your service to send and receive messages from Verify',
              'href': 'https://alphagov.github.io/rp-onboarding-tech-docs/index.html'
            },
            {
              'name': 'Test that your service can send and receive messages from Verify',
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
          'subtasks': [
            {
              'name': 'Understand the operational support model',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'Make sure you have user support for your live service',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': 'Sign the Code of Interoperability',
              'href': '/how-to-connect/not-implemented'
            },
            {
              'name': "Send us a description of your service's volumes and demographics",
              'href': '/how-to-connect/not-implemented'
            }
          ]
        }],
        [{ 
          'name': "Once you're connected",
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
              'href': '/how-to-connect/not-implemented'
            }
          ]
        }]
      ]
  })
})

router.get('/how-to-connect/not-implemented', (req, res) => {
  res.render('task-list/not-implemented')
})

module.exports = router

