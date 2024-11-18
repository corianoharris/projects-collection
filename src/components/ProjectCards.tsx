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
            <div className="container max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center" tabIndex={0}>
                    Projects
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
                        <option value="Web">Web</option>
                        <option value="UX">UX/UI</option>
                    </select>
                </div>

                <div
                    className="flex justify-center flex-wrap gap-4"
                    role="list"
                    aria-label="Projects grid"
                >
                    {filteredProjects.map((project) => (
                        <article
                            key={project.id}
                            className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow w-full max-w-sm"
                        >
                            <h2 className="text-xl font-semibold mb-2" tabIndex={0}>
                                {project.title}
                            </h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <ul
                                className="flex flex-wrap gap-2 mb-4"
                                aria-label="Technologies used"
                            >
                                {project.technologies.map((tech) => (
                                    <li
                                        key={tech}
                                        className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={project.link}
                                className="text-blue-600 hover:underline focus:ring-2 focus:ring-blue-500 focus:outline-none rounded px-2 inline-flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title}`}
                            >
                                {project.linkName} <span className="sr-only">: {project.title}</span>
                                <span aria-hidden="true" className="ml-1">→</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}