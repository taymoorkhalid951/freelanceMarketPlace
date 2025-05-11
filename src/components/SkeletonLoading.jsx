export const SkeletonLoading = () => (
  <div className="animate-pulse bg-white/70 rounded-xl shadow-xl border border-indigo-50 p-6 space-y-4">
    <div className="bg-indigo-100 h-40 w-full rounded-lg"></div>
    <div className="h-4 bg-indigo-100 rounded w-3/4"></div>
    <div className="h-4 bg-indigo-100 rounded w-1/2"></div>
    <div className="h-4 bg-indigo-100 rounded w-1/4"></div>
    <div className="h-10 bg-indigo-200 rounded w-full mt-4"></div>
  </div>
);
