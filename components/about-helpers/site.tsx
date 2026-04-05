import { Badge } from "@/components/ui/badge";
import { GithubLink } from "@/components/shared/social-linkers";
import { aboutData } from "@/data/data-index";

export function AboutSite() {
	return (
		<section id="site" className="scroll-mt-24">
			<h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-primary">About This Site</h2>

			<div className="prose dark:prose-invert max-w-none text-muted-foreground">
				<div className="space-y-2 mb-6">
					<h3 className="font-semibold text-foreground">Tech Stack:</h3>

					<div className="flex flex-wrap gap-2">
						<Badge variant="secondary">Next.js</Badge>
						<Badge variant="secondary">Tailwind CSS</Badge>
						<Badge variant="secondary">TypeScript</Badge>
						<Badge variant="secondary">Shadcn UI</Badge>
						<Badge variant="secondary">Framer Motion</Badge>
					</div>
				</div>

				{aboutData.site.map((paragraph, index) => (
					<p key={index} className="mb-2">
						{paragraph}
					</p>
				))}

				<div className="pt-1">
					<p className="flex items-center gap-2">
						Check out the source code here:{" "}
						<GithubLink href={aboutData.siteSourceRepo} className="" iconSize="sm" />
					</p>
				</div>
			</div>
		</section>
	);
}
