const NeedHelp = () => {
  return (
    <div className="bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg p-4">
      <h3 className="font-bold text-[var(--color-def)] mb-2">Need Help?</h3>
      <p className="text-sm text-[var(--color-secondary)] mb-4">
        Our support team is here to assist you with any questions
      </p>
      <a
        className="block cursor-pointer text-center w-full px-4 py-2.5 bg-[var(--color-custom)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        target="_blank"
        href="https://t.me/rpek17"
      >
        Contact Support
      </a>
    </div>
  );
};

export default NeedHelp;
