# BatonRouge.Tech

This is the repository for the [BatonRouge.Tech](https://batonrouge.tech) website. A website showcasing local user groups and events in the tech industry in the Baton Rouge area. We plan to expand to also showcase local freelancers soon, so if you have an idea on how to do that we'd welcome a Pull Request or an Issue to help guide us on that route. This site is a work in progress and we would love your help growing and maintaining it.

## Getting Started

1. **Install Gatsby CLI**

    Directions found on the [Gatsby Website](https://www.gatsbyjs.org/docs/quick-start)

1. **Start Developing**

    Once you have the repository cloned and gatsby installed, just navigate into the directory and type the following command. This will build and run the application so that you can start making changes.

    ```sh
    # run the website in development mode
    gatsby develop
    ```

1. **Adding a new User Group**

    In the content folder you will need to add two new items. The first will be an image that is placed in the `assets` folder. The second is a markdown file which is placed in the `groups` folder. For the image, try to keep it relatively small and as square as possible to fit into the current theme for the website. Most of the images are limited to `216x216` in the current design. For the markdown file you will need to add some frontmatter (the section at the start of the file), and a body description for the group.

    The frontmatter should follow the below format:

    ```yaml
    ---
    slug: brssug
    name: SQL Server User Group
    next-meeting: "2019-07-10T17:45:00.000Z"
    icon: ../assets/brssug.png
    group_url: http://www.brssug.org/
    topics: [ mssql, microsoft, azure, businessintelligence ]
    frequency: monthly
    ---
    ```

    * **slug:** This is the short tag for the name of the user group, it should be unique and should be the name of the file. This will also appear as the name of the page in the url so no spaces or funny characters please.
    * **name:** This will be the title that is displayed on the card on the homepage as well as the group's page.
    * **next-meeting:** The next meeting should follow the format `YYYY-MM-DDTHH:MM:SS.000Z` and should be written out in Central time zone. If you don't have a meeting scheduled, please put the last meeting so that the page orders correctly. This will likely be changed later on to be more dynamic, but for now, will need to be updated for each meeting.
    * **icon:** This is the relative path back to the icon and should start with `../assets/`. Ideally this image will have the same name as the slug as well.
    * **group_url:** This is the url back to your group's website, meetup, facebook, etc... Some way to get the users to your group to learn more about it.
    * **topics:** An array of topics that your group discusses to give our users more inforamtion about the group.
    * **frequency:** How often the group meets.

With that information you should have enough to get started and contributing to this repository. Please create a branch/fork with your changes and open a pull request to merge them back in. You will see automated builds from netlify running when you open the pull request, the last item will be a live preview of your changes so please test them out.

Feel free to open an issue if you need help getting going and welcome to [BatonRouge.Tech](https://batonrouge.tech)!
