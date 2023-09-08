import { navigation } from '../data/data';

export default function Footer() {
  return (
    <footer
      className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText w-screen px-6 py-4 lg:px-10"
      aria-labelledby="footer-heading"
    >
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 overflow-hidden">
        <section className="xl:grid xl:grid-cols-3 xl:gap-8">
          <section className="space-y-8 xl:col-span-1">
            <section className="flex md:space-x-6 p-2 text-xs lg:text-md">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </section>
          </section>
          <section className="mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-8 xl:mt-0 xl:col-span-2">
            <section className="md:grid md:grid-cols-2 md:gap-8 p-4 justify-center">
              <section>
                <h3 className="text-xs lg:text-md font-semibold tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4 text-xs lg:text-md">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base ">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-12 md:mt-0">
                <h3 className="text-xs lg:text-md font-semibold tracking-wider uppercase">
                  Employers
                </h3>
                <ul role="list" className="mt-4 space-y-4 text-xs lg:text-md">
                  {navigation.employers.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base  ">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
            <section className="md:grid md:grid-cols-2 md:gap-8 p-4">
              <section>
                <h3 className="text-xs lg:text-md font-semibold  tracking-wider uppercase">
                  Students
                </h3>
                <ul role="list" className="mt-4 space-y-4 text-xs lg:text-md">
                  {navigation.students.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base ">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-12 md:mt-0">
                <h3 className="text-xs lg:text-md font-semibold tracking-wider uppercase">
                  Popular Topics
                </h3>
                <ul role="list" className="mt-4 space-y-4 text-xs lg:text-md">
                  {navigation.popular.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-12 md:mt-0 ">
                <h3 className="text-xs lg:text-md font-semibold  tracking-wider uppercase">
                  Connect
                </h3>
                <ul role="list" className="mt-4 space-y-4 text-xs lg:text-md">
                  {navigation.connect.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base ">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          </section>
        </section>
        <section className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base xl:text-center">
            &copy; HyperionDev. All rights reserved.
          </p>
        </section>
      </section>
    </footer>
  );
}
