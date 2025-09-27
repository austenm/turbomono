import ThemeToggle from "./components/ThemeToggle";
import { 
  Button, 
  Card, 
  CardAction, 
  CardContent, 
  CardHeader, 
  Checkbox, 
  Dialog, 
  DialogClose, 
  DialogContent, 
  DialogTitle, 
  DialogTrigger, 
  Input, 
  RadioGroup, 
  RadioGroupItem, 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue, 
  Skeleton, 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@repo/ui/components";

export default function Page() {
  return (
    <main className="flex items-center justify-between min-h-screen p-24 bg-background">
      <div className="flex flex-col gap-8">
        <div>
        <ThemeToggle />
        </div>
        <div className="flex gap-4">
          <div className="bg-card text-card-foreground border border-border p-6 rounded-lg">Card</div>
          <div className="bg-popover text-popover-foreground border border-border p-6 rounded-lg">Popover</div>
          <div className="bg-primary text-primary-foreground p-6 rounded-lg">Primary</div>
          <div className="bg-secondary text-secondary-foreground p-6 rounded-lg">Secondary</div>
          <div className="bg-muted text-muted-foreground p-6 rounded-lg">muted</div>
          <div className="bg-accent text-accent-foreground p-6 rounded-lg">accent</div>
          <div className="bg-destructive text-destructive-foreground p-6 rounded-lg">destructive</div>
        </div>
        <div className="flex flex-col gap-4">
          <Button className="w-fit">Button</Button>
          <Card><CardHeader className="text-3xl font-semibold">Demo card</CardHeader><CardContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor sem, blandit in mollis et, luctus eget nulla. Vivamus turpis urna, euismod et nunc et, viverra sagittis augue. Integer ut ante sapien. Praesent dolor risus, rutrum eu blandit et, dignissim nec ligula. Pellentesque quis ante leo. Suspendisse porta arcu sit amet magna pretium lobortis. Nam fermentum mi sit amet est luctus, lacinia lobortis justo volutpat. Integer ac malesuada lorem, ut semper enim. Sed sapien elit, pellentesque in eleifend vel, cursus non metus. Sed et tincidunt odio. Ut consequat dignissim egestas. Donec at aliquam mi, ut facilisis est. Nam sit amet neque id arcu lacinia hendrerit.</p>
            </CardContent>
            <CardAction className="flex gap-8 pl-6">
              <Button className="btn-primary-gradient">OK</Button>
              <Button variant="secondary" className="btn-secondary-gradient">Cancel</Button>
              <Button variant="ghost">Ghost</Button>
            </CardAction>
            </Card>
          <Checkbox />
          <Dialog>
            <DialogTrigger className="text-foreground">Open</DialogTrigger>
            <DialogContent className="text-foreground">
            <DialogTitle className="text-foreground">
              Dialog test
            </DialogTitle>
              <div>This is the dialog</div>
              <DialogClose />
            </DialogContent>
          </Dialog>
          <Input placeholder="Input" className="text-foreground" />
          <RadioGroup>
            <div>
              <RadioGroupItem value="One" />
              <label className="pl-2 text-foreground">One</label>
            </div>
            <div>
              <RadioGroupItem value="Two" />
              <label className="pl-2 text-foreground">Two</label>
            </div>
            <div>
              <RadioGroupItem value="Three" />
              <label className="pl-2 text-foreground">Three</label>
            </div>
          </RadioGroup>
          <Select>
            <SelectTrigger className="text-foreground">
              <SelectValue placeholder="Choose"/>
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="One">One</SelectItem>
            <SelectItem value="Two">Two</SelectItem>
            <SelectItem value="Three">Three</SelectItem>
            </SelectContent>
          </Select>
          <Skeleton className="h-12 w-24"/>
          <Tabs>
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="text-foreground">Lookin at tab 1</TabsContent>
            <TabsContent value="tab2" className="text-foreground">Lookin at tab 2</TabsContent>
            <TabsContent value="tab3" className="text-foreground">Lookin at tab 3</TabsContent>
          </Tabs>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild><Button className="w-fit">Hover me</Button></TooltipTrigger>
              <TooltipContent>The tooltip is working</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </main>
  );
}
