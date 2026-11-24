import "./Skeleton.css";

const ItemSkeleton = () => (
    <div className="item-skeleton">
        <div className="skeleton skeleton-img" />
        <div className="item-skeleton-info">
            <div className="skeleton skeleton-category" />
            <div className="skeleton skeleton-title" />
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-price" />
        </div>
    </div>
);
export default ItemSkeleton;