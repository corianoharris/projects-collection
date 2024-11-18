// __tests__/ProjectCards.test.tsx

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectCards from '@/components/ProjectCards'

describe('ProjectCards', () =>
{
    it('renders with proper ARIA labels', () =>
    {
        render(<ProjectCards />)
        expect(screen.getByRole('list', { name: /projects grid/i })).toBeInTheDocument()
        expect(screen.getByLabelText(/filter projects by category/i)).toBeInTheDocument()
    })

    it('maintains focus management when filtering', async () =>
    {
        const user = userEvent.setup()
        render(<ProjectCards />)
        const select = screen.getByLabelText(/filter projects by category/i)

        await user.selectOptions(select, 'Web')
        expect(select).toHaveFocus()

        const projectLinks = screen.getAllByRole('link')
        projectLinks.forEach(link =>
        {
            // The link should have either text content or an aria-label
            expect(
                link.hasAttribute('aria-label') || link.textContent
            ).toBeTruthy()
        })
    })

    it('renders technology lists with proper ARIA roles', () =>
    {
        render(<ProjectCards />)
        const techLists = screen.getAllByRole('list', { name: /technologies used/i })
        expect(techLists).toHaveLength(6)

        const firstTechList = techLists[0]
        expect(firstTechList.children).toHaveLength(3)
    })

    it('ensures all interactive elements are focusable', () =>
    {
        render(<ProjectCards />)
        const focusableElements = screen.getAllByRole('heading')
        focusableElements.forEach(element =>
        {
            expect(element).toHaveAttribute('tabIndex', '0')
        })
    })

    it('includes proper semantic structure', () =>
    {
        render(<ProjectCards />)
        expect(screen.getByRole('main')).toBeInTheDocument()
        const articles = screen.getAllByRole('article')
        expect(articles).toHaveLength(6)
    })

    it('filters cards correctly', async () =>
    {
        const user = userEvent.setup()
        render(<ProjectCards />)
        const select = screen.getByRole('combobox')

        await user.selectOptions(select, 'Web')
        const webArticles = screen.getAllByRole('article')
        expect(webArticles).toHaveLength(3)

        await user.selectOptions(select, 'UX')
        const mobileArticles = screen.getAllByRole('article')
        expect(mobileArticles).toHaveLength(3)
    })
})