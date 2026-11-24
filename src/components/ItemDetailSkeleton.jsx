import "./Skeleton.css";

const ItemDetailSkeleton = () => (
    <div className="detail-skeleton">
        <div className="skeleton detail-skeleton-img" />
        <div className="detail-skeleton-info">
            <div className="skeleton skeleton-title" />
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-btn" />
        </div>
    </div>
);

export default ItemDetailSkeleton;