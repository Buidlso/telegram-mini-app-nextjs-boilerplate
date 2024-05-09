type TmaProviderErrorProps = {
  error: unknown;
};

export function TmaProviderError({ error }: TmaProviderErrorProps) {
  const errorMessage =
    error instanceof Error ? error.message : JSON.stringify(error);

  return (
    <div className="h-screen grid place-items-center">
      <span>
        <strong>Oops. Something went wrong.</strong>
        <blockquote>
          <code>{errorMessage}</code>
        </blockquote>
      </span>
    </div>
  );
}
