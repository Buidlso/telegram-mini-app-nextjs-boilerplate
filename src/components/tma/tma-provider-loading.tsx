import { Loader } from "@/components/loader";

export function TmaProviderLoading() {
  return (
    <div className="flex text-muted-foreground gap-2 text-sm items-center">
      <Loader />
    </div>
  );
}
