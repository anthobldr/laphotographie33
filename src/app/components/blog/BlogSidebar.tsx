import Image from "next/image"
export default function BlogSidebar({articles, articlesCounts}:{articles:[], articlesCounts:Record<string, number>}){
    return(
        <div className="col-4 d-none d-lg-block">
            <div className="sticky-top">
                <div className="container text-center">
                    <input type="text" placeholder="Rechercher un article" className="w-100"/>
                </div>
                <div className="d-flex flex-column gap-3 ps-lg-3 pt-lg-5">
                    <h4 className={`ls-2 pb-lg-4 text-uppercase`}>Catégories</h4>
                    <div className="d-flex justify-content-between pe-lg-5">
                        <span>Conseils photo</span>
                        <span><b>({articlesCounts["CONSEILS PHOTO"] ?? 0})</b></span>
                    </div>
                    <div className="d-flex justify-content-between pe-lg-5">
                        <span>Mariage</span>
                        <span><b>({articlesCounts["MARIAGE"] ?? 0})</b></span>
                    </div>
                    <div className="d-flex justify-content-between pe-lg-5">
                        <span>Portraits</span>
                        <span><b>({articlesCounts["PORTAITS"] ?? 0})</b></span>
                    </div>
                    <div className="d-flex justify-content-between pe-lg-5">
                        <span>Coulisses</span>
                        <span><b>({articlesCounts["COULISSES"] ?? 0})</b></span>
                    </div>
                </div>
                <div className="ps-lg-3 pt-lg-5">
                    <h4 className="ls-2 pb-lg-4 text-uppercase">Articles populaires</h4>
                    <div className="row">
                        <div className="col-12 d-flex flex-column gap-4">
                            <div className="row">
                                <div className="col-2">
                                    <Image src={"/images/blog/article_1.jpg"} width={100} height={100} alt="" />
                                </div>
                                <div className="col-6 d-flex flex-column justify-content-center ps-4">
                                    <h6>Comment préparer sa séance de photo de mariage ?</h6>
                                    <small>3 JUIN 2026</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <Image src={"/images/blog/article_2.jpg"} width={100} height={100} alt="" />
                                </div>
                                <div className="col-6 d-flex flex-column justify-content-center ps-4">
                                    <h6>Pourquoi choisir un photographe professionnel ?</h6>
                                    <small>3 JUIN 2026</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <Image src={"/images/blog/article_3.jpg"} width={100} height={100} alt="" />
                                </div>
                                <div className="col-6 d-flex flex-column justify-content-center ps-4">
                                    <h6>Mes conseils pour des photos de mariage réussies</h6>
                                    <small>3 JUIN 2026</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}