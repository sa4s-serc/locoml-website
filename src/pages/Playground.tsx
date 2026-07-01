import {
  Container,
  Section,
  Grid,
  Stack,
} from '@/components/layout/Layout';
import {
  SectionTitle,
  SectionDescription,
  Badge,
  Tag,
  Divider,
} from '@/components/ui/TypographyAndBadges';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, FeatureCard } from '@/components/ui/Card';

import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { ResponsiveVideo } from '@/components/common/ResponsiveVideo';
import { ResponsiveCanvas } from '@/components/common/ResponsiveCanvas';
import { Icons } from '@/constants/icons';

export function Playground() {
  return (
    <div className="pt-24 pb-16">
      <Container>
        <SectionTitle>Design System Playground</SectionTitle>
        <SectionDescription>
          This is an internal route for testing and previewing the LoCoML design system, components, responsive layouts, and typography.
        </SectionDescription>

        <Divider />

        <Section>
          <h3 className="font-heading text-2xl font-semibold text-heading mb-6">Responsive Typography</h3>
          <p className="text-paragraph mb-4">Resize the browser to see the fluid scaling via clamp().</p>
          <Stack className="gap-8">
            <div>
              <Tag className="mb-2">Space Grotesk - Headings</Tag>
              <h1>Heading 1</h1>
              <h2 className="mt-2">Heading 2</h2>
              <h3 className="mt-2">Heading 3</h3>
              <h4 className="mt-2">Heading 4</h4>
            </div>
            <div>
              <Tag className="mb-2">Inter - Body</Tag>
              <p className="text-lg text-paragraph max-w-2xl">
                This is standard body paragraph text. It's meant to be highly readable.
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          </Stack>
        </Section>

        <Divider />

        <Section>
          <h3 className="font-heading text-2xl font-semibold text-heading mb-6">Touch-Optimized Buttons</h3>
          <p className="text-paragraph mb-4">Buttons ensure a minimum 44x44px touch target on mobile viewports.</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="icon" aria-label="Settings"><Icons.Settings className="h-5 w-5" /></Button>
          </div>
        </Section>

        <Divider />

        <Section>
          <h3 className="font-heading text-2xl font-semibold text-heading mb-6">Responsive Media Placeholders</h3>
          <Grid>
            <div>
              <h4 className="mb-2 font-medium">Responsive Image (Skeleton)</h4>
              <ResponsiveImage alt="Placeholder image" aspectRatio="16/9" src="" />
            </div>
            <div>
              <h4 className="mb-2 font-medium">Responsive Video (Skeleton)</h4>
              <ResponsiveVideo src="" aspectRatio="16/9" />
            </div>
            <div>
              <h4 className="mb-2 font-medium">Responsive Canvas (Three.js Prep)</h4>
              <ResponsiveCanvas aspectRatio="16/9">
                <div className="flex h-full w-full items-center justify-center text-slate-400">Canvas Area</div>
              </ResponsiveCanvas>
            </div>
          </Grid>
        </Section>

        <Divider />

        <Section>
          <h3 className="font-heading text-2xl font-semibold text-heading mb-6">Responsive Layout & Grids</h3>
          <Grid>
            <Card>
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A simple card for displaying basic information or acting as a container.</p>
              </CardContent>
            </Card>

            <FeatureCard 
              title="Scalable Architecture"
              description="Deploy and manage models with infinite scalability using our distributed compute engine."
              icon={<Icons.Database className="h-5 w-5" />}
            />

            <FeatureCard 
              title="Neural Processing"
              description="Advanced neural network optimization that reduces inference time by up to 40%."
              icon={<Icons.Brain className="h-5 w-5" />}
            />
          </Grid>
        </Section>

        <Divider />

        <Section>
          <h3 className="font-heading text-2xl font-semibold text-heading mb-6">Badges & Tags</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Tag>v1.0.0</Tag>
          </div>
        </Section>

      </Container>
    </div>
  );
}
