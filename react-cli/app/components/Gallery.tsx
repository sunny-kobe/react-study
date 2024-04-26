import Image from "next/image";

function Profile() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}

export default function Gallery() {
    return (
        <div>
            <div className="intro">
                <h1>欢迎来到我的站点！</h1>
            </div>
            <p className="summary">
                你可以在这里了解我的想法。
                <br></br>
                <b>还有科学家们的<i>照片</i></b>！
            </p>
        </div>
    );
}
