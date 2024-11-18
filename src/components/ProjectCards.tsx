'use client'

import React, { useState } from 'react';

import { projects } from '@/projectsData'


export default function ProjectCards()
{
    const [selectedCategory, setSelectedCategory] = useState<string>('All')

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory)

    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
            <div className='absolute top-2 left-10'>
                <a href='#' className='mt-2 mb-2 text-2xl'><span className='text-2xl'>&#8668;</span> back to website</a>
            </div>
            <div className="container max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mt-8 mb-8 text-center" tabIndex={0}>
                    Projects Portfolio
                </h1>

                <div className="flex justify-center mb-8">
                    <label htmlFor="category-select" className="sr-only">
                        Filter projects by category
                    </label>
                    <select
                        id="category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="p-2 border rounded w-48"
                        aria-label="Filter projects by category"
                    >
                        <option value="All">All</option>
                        <option value="Web">Products</option>
                        <option value="Mobile">Web</option>
                        <option value="Analytics">Design</option>
                        <option value="Analytics">Case Studies</option>
                    </select>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="list"
                    aria-label="Projects grid"
                >
                    {filteredProjects.map((project) => (
                        <article
                            key={project.id}
                            className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow"
                            role="listitem"
                        >
                            <h2 className="text-xl text-black font-semibold mb-2" tabIndex={0}>
                                {project.title}
                            </h2>
                            <p className="text-black mb-4">{project.description}</p>
                            <div
                                className="flex flex-wrap gap-2 mb-4"
                                role="list"
                                aria-label="Technologies used"
                            >
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                                        role="listitem"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="text-blue-600 hover:underline focus:ring-2 focus:ring-blue-500 focus:outline-none rounded px-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} project details`}
                            >
                                {project.linkName} →
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}