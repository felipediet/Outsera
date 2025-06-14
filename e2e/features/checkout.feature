# Feature: Checkout

# Scenario: Successful checkout with logged-in user
#     Given the user is logged in
#     And the shopping cart contains products
#     When the user navigates to the checkout page
#     And the user fills in the delivery information (if necessary)
#     And the user selects a valid payment method
#     And the user confirms the purchase
#     Then the purchase should be processed successfully
#     And the user should receive an order confirmation

# Scenario: Guest checkout (without login)
#     Given the user is not logged in
#     And the shopping cart contains products
#     When the user navigates to the checkout page
#     And the user chooses to continue as a guest
#     And the user fills in all required delivery and payment information
#     And the user confirms the purchase
#     Then the purchase should be processed successfully
#     And the user should receive an order confirmation