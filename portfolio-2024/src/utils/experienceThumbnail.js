const FALLBACK_PRIORITY = ['solo', 'award', 'certification', 'group'];

export const getExperienceThumbnail = (experience) => {
  if (experience.img) return experience.img;
  if (!experience.photos?.length) return null;

  for (const category of FALLBACK_PRIORITY) {
    const match = experience.photos.find((p) => p.category === category);
    if (match) return match.src;
  }
  return experience.photos[0]?.src ?? null;
};
