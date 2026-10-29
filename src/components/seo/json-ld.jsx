export function JsonLd({ schema }) {
  const serialized = JSON.stringify(schema).replace(/</g, "\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}
