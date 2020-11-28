---
title: 'The Reverb: 11ty, GraphQL, and WordPress'
date: 2020-11-28T21:01:30.266Z
description: 'My first production site using 11ty, GraphQL, and a not so headless WordPress'
tags:
  - dev
  - web
  - graphql
  - 11ty
  - wordpress
  - nerd stuff
thumbnail: /images/screen-shot-2020-11-28-at-2.55.46-pm.png
---
A few weeks ago, I launched [Reverb](https://reverbcityguides.hardrockhotels.com/), a site for the Reverb Hotels, in collaboration with Hard Rock Hotels and [Culture Collide](https://culturecollide.com/). This isn't my first static site generator project but it is my first with [11ty](https://www.11ty.dev/) and my first using WordPress as a content store exclusively. I had previously made a similar site for [Hard Rock Hotels](https://areaguides.hardrockhotels.com/), an interactive guide website listing artists' favorite hometown spots for folks to explore. When Hard Rock acquired Reverb Hotels, they wanted to have a similar site for them as well with some design changes and content alterations that better matched the Reverb brand. The content changes weren't so different that it warranted a completely different CMS, and from a content administration perspective having two URLs to go to manage content seemed unnecessary. However, converting this to a WordPress multisite seemed to heavy a solution for this.

I had a few static generator sites that I had built, this blog being one of them but, I hadn't used that technology for any client sites yet. I liked Gatsby but the build times were getting long on one of the hobby sites I was managing. Doing a little searching, I found that 11ty seemed to give folks much better build times and really easy to build configuration. The true start of this project was [WPGraphQL](https://www.wpgraphql.com/), literally plug and play, GraphQL plugin for WordPress. It brings Graph*i*QL, an interactive schema browser/builder, that you can use to build your queries directly in the WordPress dashboard. To alter the WordPress site for handling the new content was really easy, new category type, and a little [ACF](https://www.advancedcustomfields.com) magic and that side was ready to go. 

This is probably way subjective but I found 11ty to be so much easier to work with than Gatsby. Part of this might be that I cut my teeth on Gatsby so, the core concepts now were internalized and I can work more on building than learning. Two of the great things about 11ty, are kind of the opposites in theory but work really well. First, the folder hierarchy is the structure of the site, at its simplest it's \`data\` and \`pages\`. If you have a file in data called \`blog\` and a template named \`blog\`, 11ty will do the routing for you. You can start to config these out yourself if you want but 11ty stays out of the way and helps you out as you go along. The other half of this is the agnostic way it handles templates. You want to use Handlebars? Markdown? Liquid? Something else? Go right ahead, 11ty currently handles about 10 different template languages and I'm sure others wouldn't be too difficult to bring in. 

What this all means is, I was able to quickly get access to our content via WPGraphQL. Using GraphQL, I was able to query for page content once instead multiple round trips that I would have to make with WordPress REST API. Finally, get a blazing fast site generated in no time at all. Ok, so not finally was hosting on Netlify which made deployments as easy as pointing to a GitHub repo.

I super stoked about this workflow and can't wait to build more. I've already started another project, using WPGraphQL but skipping 11ty for React on its own. On that one we're bringing another WPGraphQL extension, WooCommerce GraphQL. See ya' in the coding mines.
