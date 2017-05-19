
# Working with Source Control

You should look at [git-flow](http://nvie.com/posts/a-successful-git-branching-model/). It's an excellent (and popular) branching model.

## Git Flow Summary

### Branching

The main trunks that stay around forever are `develop` and `master`. `master` holds your latest release and `develop` holds your latest "stable" development copy. 

Contributors create `feature` branches (prefixed with `feature/` by convention) off of `develop`  :

    $ git checkout -b feature/my-feature develop

and `hotfix` branches (prefixed with `hotfix/` by convention) off of `master`:

    # hotfix the latest version of master
    $ git checkout -b hotfix/hotfix-version-number master

    # or hotfix from a specific version
    $ git checkout -b hotfix/hotfix-version-number <starting-tag-name>

These branches are "disposable", meaning they have a short lifespan before they are merged back to the main trunks. They are meant to encapsulate small pieces of functionality.

### Finishing Branches

When a contributor is done with a `feature` branch, they merge it back into `develop`:

    $ git checkout develop
    $ git merge --no-ff feature/my-feature
    $ git branch -d feature/my-feature

When they're done with a `hotfix` branch, they merge it back into  both `master` and `develop` so the hotfix carries forward:


    $ git checkout master
    $ git merge --no-ff hotfix/hotfix-version-number
    $ git checkout develop
    $ git merge --no-ff hotfix/hotfix-version-number
    $ git branch -d hotfix/hotfix-version-number

This is the continuous integration aspect.

### Releases
When you're ready to start packaging up a release, you create a `release` branch from your "stable" `develop` branch (same as creating `feature` branches). You then bump the version number in a tag (described below). 

Using separate `release` branches allows you to continue developing new features on `develop` while you fix bugs and add finishing touches to the `release` branch. 

When you're ready to finish the release, you merge the `release` branch into both `master` and `develop` (just like a `hotfix`) so that all your changes carry forward.

### Tagging
When you create a `release` branch or a `hotfix` branch, you bump the version number appropriately in a tag. With vanilla git, that looks like this:

    $ git tag -a <tag-name> -m <tag-description>

You'll then also have to push the tags (separately) to your remote repository:

    $ git push --tags

It's usually best to use **semantic versioning** in which your versions take the form `major.minor.hotfix`. Major bumps are backwards incompatible, whereas minor and hotfix bumps are not backwards incompatible (unless you're in beta, `0.x.x`).

### Merging
As you saw above, git-flow encourages you to merge branches with the following command:

    $ git merge --no-ff <branch-name>

The `--no-ff` option allows you to maintain all of your branch history without leaving a bunch of branches lying around in the current commit of the repository (so no worries, you won't have a branch for every version).

You're also encouraged to pull with

    $ git pull --rebase

So you don't add lots of useless merge commits.

You can configure git to do both of these things by default in your `.gitconfig`. I'll let you look that one up though ;)

### Browsing versions
When someone is looking for a specific version of your codebase, they can checkout the tag by name:

    # checkout in detached HEAD to browse
    $ git checkout <tag-name>

    # OR checkout and create a new local branch (as you might for a hotfix)
    $ git checkout -b <new-branch-name> <tag-name>

Or, if someone is browsing on github, there is also a "tags" tab in the "branches" dropdown.


## Using the git-flow extension (recommended)

My favorite way to use this model is with the [git flow extension](https://github.com/nvie/gitflow) for git.

(**Edit:** Louis has recommended the [AVH fork](https://github.com/petervanderdoes/gitflow) which works better with `git describe` and might be more active now. Thanks Louis. )

The extension automates all the messy parts (like using `merge --no-ff` and deleting branches after merging) so that you can get on with your life.

For example, with the extension, you can create a feature branch like so:

    $ git flow feature start my-feature-name

and finish it like so

    $ git flow feature finish my-feature-name

The commands for hotfixes and releases are similar, though they use the version number in place of a branch name, like so:

    # Create hotfix number 14 for this minor version.
    $ git flow hotfix start 2.4.14

    # Create the next release
    $ git flow release start 2.5.0

Git flow then creates the version tag for you and kindly reminds you to bump the version in any configuration or manifest files (which you could do with a task manager like grunt).

---

Hope that helps :) I'm not sure exactly how you'd integrate it all with your Travis CI setup, but I'm guessing githooks will get you there.