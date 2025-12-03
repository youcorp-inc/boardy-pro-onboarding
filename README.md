# Boardy Pro Onboarding

User onboarding flow for Boardy Pro - guiding new users through profile setup, LinkedIn import, and team configuration.

## Tech Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **UI**: shadcn/ui
- **Backend**: Supabase
- **Styling**: Tailwind CSS

## Features

- Multi-step onboarding wizard
- LinkedIn profile upload and import
- Phone number collection
- Team setup and confirmation
- Booking link integration

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

```
src/
├── api/           # API integrations
├── components/    # React components
│   ├── linkedin/  # LinkedIn-specific components
│   ├── team/      # Team setup components
│   └── ui/        # Shared UI components
├── hooks/         # Custom React hooks
├── integrations/  # Third-party integrations
├── lib/           # Utility functions
└── pages/         # Page components
    ├── Index.tsx
    ├── BookingLink.tsx
    ├── OnboardingComplete.tsx
    └── TeamConfirmation.tsx
```

## Related

- Built with [Lovable](https://lovable.dev)
