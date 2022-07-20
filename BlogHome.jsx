import React,{useEffect,useState} from 'react'

export const BlogHome = () => {
    
    return (
        <>
            <nav class="bg-dark navbar-dark">
                <div class="container">
                    <a href="" class="navbar-brand"><i class="fas fa-tree mr-2"></i>Home</a>
                    <form class="form-inline">
                        <input class="form-control mr-sm-0" type="search" placeholder="Search Blog" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <section id="header" class="jumbotron">
                <h4 class="display-3 text-center">welcome to blog website</h4>
                <button class="btn btn-primary ">Create Blog </button>

            </section>

            <section id="gallery">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <div class="card">
                                <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top" />
                                <div class="card-body">
                                    <h5 class="card-title">title</h5>
                                    <button class="btn btn-outline-s btn-sm">View Details</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
