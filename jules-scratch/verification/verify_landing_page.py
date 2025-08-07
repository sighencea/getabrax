from playwright.sync_api import Page, expect

def test_landing_page(page: Page):
    """
    This test verifies that the landing page renders correctly.
    """
    # 1. Arrange: Go to the landing page.
    page.goto("http://localhost:3000")

    # 2. Assert: Confirm the navigation was successful.
    # We expect the page title to be "Property Maintenance Landing".
    expect(page).to_have_title("Property Maintenance Landing")

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")
