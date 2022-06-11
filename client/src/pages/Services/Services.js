import React from 'react'
import { Link } from 'react-router-dom'
import {
  PhotographIcon as JpgIcon
} from '@heroicons/react/outline'
import { PhotographIcon as PngIcon } from '@heroicons/react/solid'
import './Services.css'

const features = [
  {
    name: 'PNG Image Compressor',
    description: 'Compress you PNG image without compromising on the quality.',
    icon: PngIcon,
    href: 'png-compressor'
  },
  {
    name: 'JPG Image Compressor',
    description: 'Compress you JPG image without compromising on the quality.',
    icon: JpgIcon,
    href: 'jpg-compressor'
  },
]


const Services = () => {
  return (
    <div>
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          {/* <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Our Free Services
          </p>
          {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                malesuada. Eleifend condimentum id viverra nulla.
              </p> */}
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Link to={feature.href}>
                  <div key={feature.name} className={["pt-6", "service-card"]}>
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                            {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                            <feature.icon className="h-6 w-6 " aria-hidden="true" style={{ color: 'teal' }} />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                        <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services