import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingSkeleton() {
  return (
    <SkeletonTheme baseColor="#000" highlightColor="#000">
      <p>
        <Skeleton count={5} />
      </p>
    </SkeletonTheme>
  );
}
