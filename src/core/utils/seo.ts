export const updateDocumentTitle = (title: string) => {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
};

export const updateMetaDescription = (description: string) => {
  if (typeof document !== 'undefined') {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }
};

export const updateMetaKeywords = (keywords: string[]) => {
  if (typeof document !== 'undefined') {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const content = keywords.join(', ');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }
};